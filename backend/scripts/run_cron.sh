#!/bin/bash

# Change to the script directory
cd "$(dirname "$0")/.."

# Activate virtual environment
source venv/bin/activate

# Run the data fetcher
python scripts/fetch_leetcode_data.py

# Deactivate virtual environment
deactivate