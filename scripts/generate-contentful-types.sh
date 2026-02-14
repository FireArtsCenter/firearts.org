#!/bin/bash

# 1. Load .env variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# 2. Safety Checks
echo "--- Contentful Type Generation ---"

# Check if variable is empty
if [ -z "$CONTENTFUL_MANAGEMENT_TOKEN" ]; then
    echo "❌ Error: CONTENTFUL_MANAGEMENT_TOKEN is missing from .env"
    exit 1
fi

# Check for the correct prefix (CFPAT-)
if [[ $CONTENTFUL_MANAGEMENT_TOKEN != CFPAT-* ]]; then
    echo "❌ Error: Invalid token type."
    echo "   The Type Generator requires a Personal Access Token (CMA)."
    echo "   It should start with 'CFPAT-'. Your current token does not."
    echo "   Go to: Settings > Personal access tokens to generate a new one."
    exit 1
fi

echo "✅ Token format verified (CMA)."
echo "📡 Fetching schema for Space: $CONTENTFUL_SPACE_ID..."

# 3. Run the generator
npx cf-content-types-generator \
  -s "$CONTENTFUL_SPACE_ID" \
  -t "$CONTENTFUL_MANAGEMENT_TOKEN" \
  -o src/types/contentful

echo "🎉 Types generated successfully in src/types/contentful"
