// 创建一个10个字节的buffer
let buf = Buffer.alloc(10)

// 创建一个1000字节不安全的buffer
buf = Buffer.allocUnsafe(1000)

buf = Buffer.from('hello')

// 操作buffer其中一位转化成二进制
console.log(buf[0].toString(2))

buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])

// 将buffer转换成字符串，默认是utf-8
console.log(buf.toString())

// 正常8位二进制最大值为255，对于溢出的二进制舍弃高位数字
let buf2 = Buffer.from('jj')
buf2[0] = 361
console.log(buf2)

// 一个中文字符占三个字节
let buf3 = Buffer.from('你好')
console.log(buf3) // <Buffer e4 bd a0 e5 a5 bd>
