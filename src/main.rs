fn main() {
    single_number(vec![1, 2, 1, 3, 2]);

    sum_of_multiples(7);

    max_profit(vec![2, 1, 4]);
}

fn max_profit(prices: Vec<i32>) -> i32 {
    let mut min = std::i32::MAX;
    let mut res = 0;
    for i in prices {
        if i < min {
            min = i
        } else if i - min > res {
            res = i - min
        }
    }
    res
}

fn sum_of_multiples(n: i32) -> i32 {
    let mut res = 0;
    for i in 3..=n {
        if i % 3 == 0 || i % 5 == 0 || i % 7 == 0 {
            res += i
        }
    }
    res
}

fn single_number(nums: Vec<i32>) -> i32 {
    let mut res = 0;

    for num in nums {
        res ^= num;
    }

    res
}
