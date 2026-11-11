#!/usr/bin/env bash
# Regenerate public/cv-*.pdf from public/resume.html. Run after editing the CV.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
SRC="file:///$(pwd -W 2>/dev/null || pwd)/public/resume.html"
TMP="$(mktemp -d)"
for lang in fr en; do
  "$CHROME" --headless=new --disable-gpu --user-data-dir="$TMP" --no-pdf-header-footer \
    --virtual-time-budget=3000 --print-to-pdf="$(pwd -W 2>/dev/null || pwd)/public/cv-mouad-sehli-$lang.pdf" "$SRC?lang=$lang"
done
rm -rf "$TMP"
