import sys
from pathlib import Path
from typing import Dict

import pandas as pd


def read_all_csvs(directory: Path) -> Dict[str, pd.DataFrame]:
    """Read all CSV files in a directory into a dict of DataFrames keyed by
    filename (without extension).
    """
    dataframes: Dict[str, pd.DataFrame] = {}
    for csv_path in sorted(directory.glob("*.csv")):
        try:
            df = pd.read_csv(csv_path, low_memory=False)
            dataframes[csv_path.stem] = df
        except Exception as exc:
            print(f"Failed to read {csv_path.name}: {exc}")
    return dataframes


def preview_dataframes(dfs: Dict[str, pd.DataFrame], rows: int = 5) -> None:
    """Print a compact preview (shape, columns, head) for each DataFrame."""
    for name, df in dfs.items():
        print("=" * 100)
        print(
            f"File: {name}.csv | Shape: {df.shape[0]} rows x "
            f"{df.shape[1]} cols"
        )
        print("Columns:", ", ".join(map(str, df.columns.tolist())))
        print("-" * 100)
        print(df.head(rows).to_string(index=False))
    print("=" * 100)


def main() -> int:
    # Default to this script's directory; override with first CLI arg
    base_dir = (
        Path(sys.argv[1]).resolve()
        if len(sys.argv) > 1
        else Path(__file__).parent.resolve()
    )
    if not base_dir.exists() or not base_dir.is_dir():
        print(f"Directory not found: {base_dir}")
        return 1

    print(f"Reading CSVs from: {base_dir}")
    dfs = read_all_csvs(base_dir)
    if not dfs:
        print("No CSV files found.")
        return 0

    preview_dataframes(dfs, rows=5)
    return 0


if __name__ == "__main__":
    sys.exit(main())

