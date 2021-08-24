# rCore-2021New

### TODO LIST

- [ ] 整合测例
  - 简化测试流程，在 os 文件夹下运行 `make run TEST=1(or 2, etc)` 即可测试，不单独设立测例仓库
  - 统一 syscall 的标准，sys_get_time 用原测例的
- [ ] 更新框架代码
  - 过于硬核的 Rust 语法：比如函数式手法用的太多？内核逻辑不敢改qwq
  - 简化 Makefile 的逻辑
  - 删除 k210 所有相关代码
  - 将原第一章作业 logging 模块整合进框架中
- [ ] 更新 tutorial book
  - ch3 编程作业修改意见：
  
    —— 只需实现 Stride 算法和 sys_set_priority 系统调用
  
    —— 超时杀死进程的测例取消，sys_get_time 改由框架提供，ch4 引入虚实转换后再让同学重写这个函数

### NOTES

#### ch1

[用 GDB debug rCore](https://rcore-os.github.io/rCore-Tutorial-deploy/docs/pre-lab/gdb.html)

#### ch3

加载的程序地址超出qemu提供的内存空间，出现：

[kernel] IllegalInstruction in application, core dumped.

增加测例数量时，预留的栈数量也要增加：

pub const MAX_APP_NUM: usize = 8

#### ch4

虚存模块太多的地方使用了 `unwrap`, 大部分可能的错误都没有处理。

> 让同学们自己处理有没有问题？

#### ch5

`spawn` 改不改？

> 预计 ch5-6 会落在造机期间，任务量得小心控制。。。
