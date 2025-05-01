import requests
import json
import time
from typing import List, Dict, Any
import os
from dotenv import load_dotenv

load_dotenv()

# LeetCode GraphQL endpoint
LEETCODE_ENDPOINT = "https://leetcode.com/graphql"

# User agent to identify our requests
USER_AGENT = "LeetSquad/1.0 (https://leetsquad.xyz; admin@leetsquad.xyz)"

def get_user_stats(username: str) -> Dict[str, Any]:
    """Fetch LeetCode stats for a given username."""
    query = """
    query getUserProfile($username: String!) {
        matchedUser(username: $username) {
            username
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
            profile {
                ranking
            }
        }
    }
    """

    variables = {"username": username}

    try:
        response = requests.post(
            LEETCODE_ENDPOINT,
            json={"query": query, "variables": variables},
            headers={"User-Agent": USER_AGENT},
            timeout=10
        )
        response.raise_for_status()
        data = response.json()

        if "errors" in data:
            return None

        user = data["data"]["matchedUser"]
        if not user:
            return None

        # Extract problem counts
        submissions = user["submitStats"]["acSubmissionNum"]
        easy = next(s["count"] for s in submissions if s["difficulty"] == "Easy")
        medium = next(s["count"] for s in submissions if s["difficulty"] == "Medium")
        hard = next(s["count"] for s in submissions if s["difficulty"] == "Hard")
        total = easy + medium + hard

        return {
            "username": username,
            "total_solved": total,
            "easy_solved": easy,
            "medium_solved": medium,
            "hard_solved": hard,
            "rank": user["profile"]["ranking"]
        }
    except Exception as e:
        print(f"Error fetching data for {username}: {str(e)}")
        return None

def get_streak(username: str) -> int:
    """Fetch current streak for a user."""
    # TODO: Implement streak calculation from LeetCode calendar
    # For now, return a mock value
    return 0

def fetch_all_users(usernames: List[str]) -> List[Dict[str, Any]]:
    """Fetch stats for all users in the roster."""
    results = []

    for username in usernames:
        stats = get_user_stats(username)
        if stats:
            stats["streak"] = get_streak(username)
            results.append(stats)
        time.sleep(0.5)  # Rate limiting

    # Sort by total problems solved
    results.sort(key=lambda x: x["total_solved"], reverse=True)

    # Add ranks
    for i, user in enumerate(results, 1):
        user["rank"] = i

    return results

def main():
    # Load roster from environment variable
    roster = os.getenv("LEETCODE_ROSTER", "").split(",")
    if not roster or not roster[0]:
        print("Error: No users in roster")
        return

    # Fetch data
    users = fetch_all_users(roster)

    # Save to file
    output = {
        "players": users,
        "last_updated": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    }

    with open("leaderboard.json", "w") as f:
        json.dump(output, f, indent=2)

    print(f"Successfully updated leaderboard with {len(users)} users")

if __name__ == "__main__":
    main()