from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Report:
    name: str
    size: int
    tags: list[str]


def summarize(path: Path) -> Report:
    payload = path.read_text(encoding="utf-8")
    lines = [line.strip() for line in payload.splitlines() if line.strip()]
    return Report(name=path.stem, size=len(payload), tags=lines[:3])


if __name__ == "__main__":
    sample = summarize(Path("sample.txt"))
    print(f"{sample.name=} {sample.size=} {sample.tags=}")
