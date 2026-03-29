using System;
using System.Collections.Generic;
using System.Linq;

namespace Visual.Theme;

public record BuildSummary(string Name, IReadOnlyList<string> Targets);

public static class Program
{
    public static void Main()
    {
        var summary = new BuildSummary("release", new[] { "api", "worker", "web" });
        var label = string.Join(", ", summary.Targets.Where(target => target.Length > 2));
        Console.WriteLine($"{summary.Name}: {label}");
    }
}
