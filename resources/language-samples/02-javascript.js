const featureFlags = new Set(['search', 'metrics', 'exports']);
const versionPattern = /^v?(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$/;

async function resolveBuild(tag) {
  const match = versionPattern.exec(tag ?? '0.0.0');
  const current = {
    major: Number(match?.groups?.major ?? 0),
    minor: Number(match?.groups?.minor ?? 0),
    patch: Number(match?.groups?.patch ?? 0),
  };

  if (!featureFlags.has('metrics')) {
    return { current, enabled: false };
  }

  return {
    current,
    enabled: true,
    label: `build-${current.major}.${current.minor}.${current.patch}`,
  };
}

resolveBuild('v1.4.2').then((result) => console.info(result));
