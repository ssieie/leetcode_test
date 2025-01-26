
//  1，3，5，7，9，15，21, 25, 35
var getKthMagicNumber = function (k) {
    let a = [1]
    let a3 = 0
    let a5 = 0
    let a7 = 0
    for (let i = 1; i < k; i++) {
        let resN = Math.min(Math.min(a[a3] * 3, a[a5] * 5), a[a7] * 7)

        if (resN % 3 == 0) {
            a3++;
        }
        if (resN % 5 == 0) {
            a5++;
        }
        if (resN % 7 == 0) {
            a7++;
        }
        a[i] = resN;
    }
    return a[k - 1]
};

var isFlipedString = function (s1, s2 = '') {
    if (s1.length !== s2.length) return false
    return s2.repeat(2).includes(s1)
}
isFlipedString('133', '123')

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix = []) {
    let matrixLen = matrix.length

    let zeroesIdx = []

    for (let i = 0; i < matrixLen; i++) {
        let len = matrix[i].length
        for (let j = 0; j < len; j++) {
            if (matrix[i][j] === 0) zeroesIdx.push([i, j])
        }
    }

    let zeroesIdxLen = zeroesIdx.length
    for (let k = 0; k < zeroesIdxLen; k++) {
        matrix[zeroesIdx[k][0]] = new Array(matrix[zeroesIdx[k][0]].length).fill(0)
        for (let a = 0; a < matrixLen; a++) {
            matrix[a][zeroesIdx[k][1]] = 0
        }
    }
};

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start = '', end = '') {
    let len = start.length
    let i = 0, j = 0
    while (true) {
        while (start[i] === 'X') i++
        while (end[j] === 'X') j++
        if (i >= len && j >= len) return true
        if (i >= len || j >= len) return false
        if (start[i] !== end[j]) return false
        if (start[i] === 'R' && i > j) return false
        if (start[i] === 'L' && i < j) return false
        i++, j++
    }
};
// R L R R L && R L R R L
canTransform("RXXLRXRXL", "XRLXXRRLX")

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number = '') {
    number = number.replace(/-|\s+/g, '')
    if (number.length === 2) return number
    let numberArr = []
    for (let i = 0; i < number.length; i += 3) {
        numberArr.push(number.slice(i, i + 3))
    }
    let len = numberArr.length
    let endItem = numberArr[len - 1]

    switch (endItem.length) {
        case 1:
            let a = numberArr[len - 2].slice(numberArr[len - 2].length - 1)
            numberArr[len - 2] = numberArr[len - 2].slice(0, numberArr[len - 2].length - 1)
            numberArr[len - 1] = a + numberArr[len - 1]
            break;

        default:
            break;
    }
    return numberArr.join('-')
};

reformatNumber("472-7 34521373 52522348 66-54-989--5")

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输入：nums1 = [2, 0, 4, 1, 2], nums2 = [1, 3, 0, 0, 2]
 * 输出：[2,0,2,1,4]
 */
var advantageCount = function (nums1 = [], nums2 = []) {
    let n1L = nums1.length
    nums1 = nums1.sort()
    let vote = nums2.map((foo, idx) => ([idx, foo]))
    vote = vote.sort((v1, v2) => v2[1] - v1[1])
    let left = 0, right = n1L - 1
    for (let i = 0; i < n1L; i++) {
        if (nums1[right] > vote[i][1]) {
            nums2[vote[i][0]] = nums1[right]
            right--
        } else {
            nums2[vote[i][0]] = nums1[left]
            left++
        }
    }
    return nums2
};

advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2])

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s = '') {
    let len = s.length

    let deep = 0
    let sum = 0

    for (let i = 0; i < len; i++) {
        if (s[i] === '(') deep++
        else deep--
        if (s[i] == ')' && s[i - 1] == '(') sum += 1 << deep;
    }
    return sum

};

scoreOfParentheses("(()(()))")

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    let line = ["0"]
    for (let i = 0; i < n; i++) {
        if (line[i] === undefined) {
            let a = line[i - 1].split('').map(foo => {
                let a = foo === '0' ? '01' : '10'
                return a
            })
            // if (n > ) {

            // }
            line[i] = a.join('')
        }
    }
    console.log(line);
    console.log(line[n - 1].split('')[k - 1]);
    return line[n - 1].split('')[k - 1]
};
// kthGrammar(10, 2)


/**
 * 0
 * 01
 * 0110
 * 01101001
 * 01101001 10010110
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1 = [], l2 = []) {

};
/**
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // let isSame = true
    // const fn = (root, roota) => {
    //     if (root && roota) {
    //         if (root.val !== roota.val) {
    //             isSame = false
    //             return
    //         }
    //         fn(root.left, roota.left)
    //         fn(root.right, roota.right)
    //     } else if (!root && !roota) {

    //     } else {
    //         isSame = false
    //         return
    //     }
    // }

    // fn(p, q)
    // return isSame
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const fn = (node1, node2) => {
        if (!node1 && !node2) {
            return true
        }
        if (!node1 || !node2) {
            return false
        }
        if (node1.val !== node2.val) {
            return false
        }
        return fn(node1.left, node2.right) && fn(node1.right, node2.left)
    }
    return fn(root, root)
}

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let a = init
    return (function (a) {
        return {
            increment() {
                return ++a
            },
            reset() { return a = init },
            decrement() { return --a },
        }
    })(a)
};

const counter = createCounter(5)

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr
};
function plusone(n) { return n + 1; }
const newArray = map([1, 2, 3], plusone); // [2,3,4]

var filter = function (arr, fn, init) {
    return arr.reduce((cv, val) => {
        return fn(cv, val)
    }, init)
};

function greaterThan10(n, x) { return n + x; }
const newArray1 = filter([0, 10, 20, 30], greaterThan10, 1); // [20, 30]

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions = []) {
    return function (x) {
        return functions.reverse().reduce((cv, val) => {
            return val(cv)
        }, x)
    }
};

const fn = compose([x => x + 1, x => 2 * x])

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let idx = 0
    return function (...args) {
        if (idx > 0) {
            return undefined
        }
        idx++
        return fn(...args)
    }
};


let fn1 = (a, b, c) => (a + b + c)
let onceFn = once(fn1)

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const vote = {}
    return function (...args) {
        if (Reflect.has(vote, args.join(''))) {
            return vote[args.join('')]
        }
        const result = fn(...args)
        vote[args.join('')] = result
        return result
    }
}
let callCount = 0;
const memoizedFn = memoize(function (a, b, c = 0) {
    callCount += 1;
    return a + b + c
})

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, millis)
    })
}


let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t))

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t))
        ])

    }
};
const limited = timeLimit((t) => new Promise((res, rej) => {
    setTimeout(res, t)
}), 100);

limited(50)

var promisePool = async function (functions = [], n) {
    const queue = []
    let currentTaskIdx = n
    queue.push(...functions.slice(0, currentTaskIdx))

    const handler = async () => {
        while (queue.length > 0) {
            await Promise.allSettled(queue.map(e => e())).then(res => {
                console.log(res);
            })
            queue.shift()
            queue.push(...functions.slice(currentTaskIdx, ++currentTaskIdx))
        }
    }

    return new Promise(async (res) => {
        await handler()
        res()
    })
};

// console.time('1')
// promisePool([() => sleep(200), () => sleep(300), () => sleep(400)], 1).then(() => {
// console.timeEnd('1')
// })

class MyClass {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    sayHh() {
        console.log("HAHAHAHA")
    }
}

function vaildParameter(p1, p2) {
    if (p1.length != p1.length) {
        return false
    }
    for (let i = 0, len = p1.length; i < len; i++) {
        if (p1[i] != p2[i]) {
            return false
        }
    }
    return true
}

function singletonGenerator(className) {
    let ins, parameter
    return new Proxy(className, {
        construct(target, args) {
            if (!ins) {
                parameter = args
                ins = Reflect.construct(target, args)
            }
            if (!vaildParameter(parameter, args)) {
                throw new Error("parameter in " + parameter.toString())
            }
            return ins
        }
    })
}

const Class = singletonGenerator(MyClass)
const v1 = new Class(1, 2)
const v2 = new Class(1, 2)


/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
// 输入：positive_feedback = ["smart","brilliant","studious"],
// negative_feedback = ["not"],
// report = ["this student is studious","the student is smart"],
// student_id = [1,2],
// k = 2
// 输出：[1,2]
// 解释：
// 两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。
function countingTheNumberOfWords(s1, s2) {
    let total = 0
    s1 = s1.split(' ')
    for (let i = 0, len = s1.length; i < len; i++) {
        if (s2.includes(s1[i])) {
            total++
        }
    }
    return total
}
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
    const vote = {}
    for (let i = 0, len = student_id.length; i < len; i++) {

        if (!Reflect.has(vote, student_id[i])) {
            vote[student_id[i]] = 0
        }
        vote[student_id[i]] += 3 * countingTheNumberOfWords(report[i], positive_feedback)
        vote[student_id[i]] -= countingTheNumberOfWords(report[i], negative_feedback)
    }
    return Object.keys(vote).sort((v1, v2) => {
        if (vote[v1] === vote[v2]) {
            return +v1 - +v2
        }
        return vote[v2] - vote[v1]
    }).slice(0, k)
};
// wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq
let a = topStudents(["fkeofjpc", "qq", "iio"],
    ["jdh", "khj", "eget", "rjstbhe", "yzyoatfyx", "wlinrrgcm"],
    [
        "rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio",
        "gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx",
        "tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe",
        "jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh",
        "yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq",
        "fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v",
        "wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq",
        "d vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe"
    ],
    [96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671, 908938263], 3)


/**
* @param {number[]} nums
* @return {number}
*/
var findTheArrayConcVal = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    let result = 0
    let flag = nums.length

    for (let i = 0, len = flag; i < len; i++) {
        result += +`${nums[i]}${nums[len - i - 1]}`

        flag -= 2
        if (flag === 1) {
            result += nums[i + 1]
            break
        }
        if (flag === 0) {
            break
        }
    }
    return result
};

const AA = findTheArrayConcVal([7, 52, 2, 4])


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    //   101
    //   110
    // ^ 011

    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
};

singleNumber([1, 2, 1, 3, 2])

/**
 * @param {number} n
 * @return {number}
 */
// 3,5,7
var sumOfMultiples = function (n) {
    if (n < 3) return 0
    let res = 0
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            res += i
        }
    }
};

sumOfMultiples(7)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_VALUE
    let res = 0
    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > res) {
            res = prices[i] - min
        }
    }
};

maxProfit([2, 1, 4])

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    const vote = {}
    let res = 0

    for (let i = 0, len = nums.length; i < len; i++) {
        if (!vote[nums[i]]) {
            vote[nums[i]] = 1
        } else {
            vote[nums[i]]++
        }
    }

    let n = Object.keys(vote).sort((n1, n2) => n2 - n1)
    if (vote[n[0]] === k) {
        return n[0] * k
    }

    for (let i = 0; i < k; i++) {
        const cKey = n[0]
        // if (cKey < 3) {
        //     if (vote[cKey] > 0) {
        //         // console.log(n, vote[cKey]);
        //         res += +cKey * vote[cKey]
        //         vote[cKey]--
        //     } else {
        //         break
        //     }

        //     continue
        // }
        res += (+cKey * +vote[cKey])
        // res += +cKey

        let next = Math.ceil(+cKey / 3)
        if (vote[next]) vote[next] = +vote[next] + +vote[cKey]
        else vote[next] = vote[cKey]

        // if (vote[next]) vote[next] += 1
        // else vote[next] = 1

        // vote[cKey]--
        // if (vote[cKey] === 0) {
        delete vote[cKey]
        n = Object.keys(vote).sort((n1, n2) => n2 - n1)
        // }
    }
    return res
};

const kk = [597189039, 57948756, 143524875, 379494516, 862193035, 868775043, 395597119, 275046118, 306907315, 257034002, 476132995, 69495282, 395493151, 354621370, 365510017, 520479568, 219063577, 159958079, 113409455, 170145739, 687892872, 881301934, 723211517, 276655363, 635301113, 440291651, 961908086, 821028930, 821879600, 82879805, 850787822, 547409867, 813461937, 866639644, 512259589, 130847041, 973334294, 114942610, 233744177, 941195642, 888940360, 983125701, 533826303, 726965368, 516401603, 312579605, 182667172, 447853195, 275822190, 338282009]
console.log(maxKelements(kk, 62126));

// 36767245672

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let len = str.length
    let i = 0
    let j = len - 1
    let result = true

    for (; i < len;) {
        if (str[i] !== str[j]) {
            result = false
            break
        }
        i++
        j--
    }

    return result

};

// isPalindrome("A man, a plan, a canal: Panama")

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return []

    const res = []

    const iterationTree = (tree) => {
        if (tree) {
            tree.left && iterationTree(tree.left)
            tree.right && iterationTree(tree.right)
            res.push(tree.val)
        }
    }

    iterationTree(root)
};
var postorderTraversal = function (root) {
    if (!root) return []

    const stack = [];   // 模拟递归的栈
    const output = [];  // 存储逆序的后序结果

    stack.push(root);

    while (stack.length) {
        const node = stack.pop(); // 弹出栈顶节点
        output.push(node.val);    // 将当前节点值存入结果栈

        // 先压入左子节点，再压入右子节点
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    // 逆序结果栈，得到后序遍历结果
    return output.reverse();
};

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber = 2147483647) {
    // 取余26为最后一位对应的列标识
    let result = ''

    while (columnNumber > 0) {
        const a = (columnNumber - 1) % 26

        result += String.fromCharCode(65 + a)

        columnNumber = Math.floor((columnNumber - 1) / 26)

    }

    return result.split('').reverse().join('')

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums = [3, 2, 3]) {
    // const obj = {}
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1
    // }

    // const a = [0, 0]

    // for (const [key, value] of Object.entries(obj)) {
    //     if (value > a[1]) {
    //         a[1] = value
    //         a[0] = key
    //     }
    // }

    // return +a[0]

    let candidate = null;
    let count = 0;

    // 第一遍扫描，找出候选元素
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // 返回候选元素
    return candidate;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

    const getHeight = (tree) => {
        if (!tree) {
            return 0
        }

        // 递归计算左子树的高度 0
        const leftHeight = getHeight(node.left);
        if (leftHeight === -1) {
            return -1; // 左子树不平衡，直接返回 -1
        }

        // 递归计算右子树的高度
        const rightHeight = getHeight(node.right);
        if (rightHeight === -1) {
            return -1; // 右子树不平衡，直接返回 -1
        }

        // 判断当前节点是否平衡
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // 当前节点不平衡
        }

        // 返回当前节点的高度
        return Math.max(leftHeight, rightHeight) + 1;
    }

    const height = getHeight(root)

    return height !== -1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

    const depth = (tree) => {
        if (!tree) return 0

        if (!tree.left) {
            return depth(tree.right) + 1;
        }

        // 如果右子树为空，递归计算左子树深度
        if (!tree.right) {
            return depth(tree.left) + 1;
        }

        // 如果左右子树都存在，取较小值
        return Math.min(depth(tree.left), depth(tree.right)) + 1;
    }

    return depth(root)
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    const stack = []
    stack.push(root)

    while (stack.length) {
        const node = stack.pop()
        if (node === null) return false
        if (node.val === targetSum && node.left === null && node.right === null) {
            return true
        }

        if (node.left !== null) {
            node.left.val += node.val
            stack.push(node.left)
        }
        if (node.right !== null) {
            node.right.val += node.val
            stack.push(node.right)
        }
    }

    return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

};

const waiting = (w = 2) => {
    return new Promise((r) => {
        setTimeout(() => {
            r()
        }, w * 1000)
    })
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum21 = async function (candidates = [10, 1, 2, 1, 5, 6, 7], target = 8) {
    candidates = candidates.sort((a, b) => a - b) // 1 1 2 5 6 7 10
    const result = []

    function backtrack(start, target, currentCombination) {
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) break;
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            currentCombination.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], currentCombination);
            currentCombination.pop();
        }

    }
    backtrack(0, target, []);

    return result;

}