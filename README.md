# rCore-2021New

### TODO LIST

- [ ] 整合测例
  - 简化测试流程，在 os 文件夹下运行 `make run TEST=1` 即可测试，不再单独设立测例仓库
  - 统一 syscall 的标准，sys_get_time 用原测例的
- [ ] 简化框架代码
  - 内核代码动不了qwq
    - 虚存模块太多的地方使用了 `unwrap`, 要不要改？怎么改？
  - 简化 Makefile 的逻辑
  - 将原第一章作业 logging 模块整合进框架中
- [ ] 更新 tutorial book
  - ch3 的编程作业修改意见：
  
    —— 只留 Stride 算法和 sys_set_priority 系统调用
  
    —— 超时杀死进程的测例没有什么启发性，取消
  
    —— sys_get_time 改由框架提供，ch4 引入虚实转换后再让同学重写这个函数

### NOTES

#### ch1

[用 GDB debug rCore](https://rcore-os.github.io/rCore-Tutorial-deploy/docs/pre-lab/gdb.html)

#### ch3

加载的程序地址超出qemu提供的内存空间，出现：

[kernel] IllegalInstruction in application, core dumped.

增加测例数量时，预留的栈数量也要增加：

pub const MAX_APP_NUM: usize = 8
