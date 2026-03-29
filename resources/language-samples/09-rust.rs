#[derive(Debug)]
struct BuildTarget {
    name: &'static str,
    retries: u8,
}

fn main() {
    let targets = vec![
        BuildTarget { name: "api", retries: 1 },
        BuildTarget { name: "worker", retries: 2 },
        BuildTarget { name: "web", retries: 0 },
    ];

    for target in targets.iter().filter(|item| item.retries <= 2) {
        println!("{:?}", target);
    }
}
