pub fn process_part1(input: &str) -> String {
    println!("{:?}", input);
    let result = input
        .split("\n\n")
        .map(|elf| {
            elf.lines()
                .map(|num| num.parse::<u32>().expect("parsing error!"))
                .sum::<u32>()
        })
        .max()
        .expect("max error!");
    result.to_string()
}

pub fn process_part2(input: &str) -> String {
    println!("{:?}", input);
    let mut result = input
        .split("\n\n")
        .map(|elf| {
            elf.lines()
                .map(|num| num.parse::<u32>().expect("parsing error!"))
                .sum::<u32>()
        })
        .collect::<Vec<_>>();
    result.sort_by(|a, b| b.cmp(a));
    let sum = result.iter().take(3).sum::<u32>();
    dbg!(result);

    sum.to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    const INPUT: &str = "1000
2000
3000

4000

5000
6000

7000
8000
9000

10000";
    #[test]
    fn day_1() {
        let result = process_part1(&INPUT);
        assert_eq!(result, "24000");
    }

    #[test]
    fn day_2() {
        let result = process_part2(&INPUT);
        assert_eq!(result, "45000")
    }
}
