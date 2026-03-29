package demo.visual;

import java.time.Instant;
import java.util.List;

public final class BuildReport {
  private final List<String> modules;

  public BuildReport(List<String> modules) {
    this.modules = modules;
  }

  public String render() {
    return "modules=" + modules + ", createdAt=" + Instant.now();
  }

  public static void main(String[] args) {
    var report = new BuildReport(List.of("api", "core", "web"));
    System.out.println(report.render());
  }
}
