[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- Address Binding
- Dynamic Loading
- Swapping
- Memory Allocation
- Fragmentation
- Uni-programming
- Multiprogramming

# Address Binding

![Address Binding](https://velog.velcdn.com/images/sunkeydokey/post/16bd6d91-8224-4c0c-b6bb-c75bf6393086/image.png)

## 개념

프로그래밍의 논리 주소를 실제 메모리의 물리 주소로 매핑하는 작업

## 구분

![구분](https://velog.velcdn.com/images/sunkeydokey/post/3fb7c225-155e-494e-93d2-bce82c2a9a49/image.png)

Address Binding은 Binding 시점에 따라서 다음과 같이 구분할 수 있다.

### Compile time binding

- 프로세스가 메모리에 적재될 위치를 컴파일러가 알 수 있어야 한다.
- 위치가 변하지 않는다.
- 프로그램 전체가 메모리에 올라가야 한다.

### Load time binding

- 컴파일 시점에 메모리 적재 위치를 모르면 대체할 상대 주소를 생성한다.
- 적재 시점에 시작 주소를 반영하여 사용자 코드 상의 주소를 재설정한다.
- 프로그램 전체가 메모리에 올라가야 한다.

### Run time binding

- Address binding을 수행시간까지 연기한다.
- 프로세스 수행 도중에 다른 메모리 위치로 이동할 수 있다.
- HW의 도움이 필요하다.
- 대부분의 OS가 채택한 방식이다.

# Dynamic loading

- 모든 루틴을 교체 가능한 형태로 디스크에 저장한다.
- 실제 호출 전까지는 루틴을 적재하지 않는다.
  - 메인 프로그램만 메모리에 적재하여 수행한다.
  - 루틴의 호출 시점에 Address binding을 수행한다.
- 메모리 공간을 효율적으로 사용할 수 있다.

# Swapping

![Swapping](https://velog.velcdn.com/images/sunkeydokey/post/fa081560-243f-472c-9871-717e0aafb429/image.png)

프로세서 할당이 끝나고 수행 완료된 프로세스는 swap-device로 보내는 Swap-out과 새롭게 시작하는 프로세스를 메모리에 적재하는 Swap-in을 말한다.

# Memory Allocation (메모리 할당)

## Continuous Memory Allocation (연속할당)

프로세스를 하나의 연속된 메모리 공간에 할당하는 정책 (프로그램, 데이터, 스택 등). 메모리 구성 정책은 Multiprogramming degree, 할당되는 메모리 공간 크기, 메모리 분할 방식 등에 따라 달라진다.

## Non-continuous Memory Allocation (비연속할당)

다음 챕터인 가상 메모리 파트에서 다루게 될 것.

# Uni-Programming

![Uni-Programming](https://velog.velcdn.com/images/sunkeydokey/post/e415cb38-3358-4131-9e9f-200b217ac003/image.png)

## 개념

하나의 프로세스만 메모리 상에 존재한다. 가장 간단한 메모리 관리 기법이다.

## 문제점과 해결 방법

1. 프로그램의 크기가 메모리보다 큰 경우 메모리에 현재 필요한 영역만 적재하는 Overlay structure를 활용할 수 있다. 다만 이 경우 사용자가 프로그램의 흐름과 자료구조를 완벽하게 이해하고 있어야 한다.

2. 프로그램이 커널영역을 침범할 수 있다. 이 경우에는 경계 레지스터를 활용해 방지하면 된다.

3. 성능과 자원활용률이 낮다. 이에 Multi-programming을 사용한다.

# Fixed Partition Multi-programming (FPM)

![FPM](https://velog.velcdn.com/images/sunkeydokey/post/bb716571-b8cb-4fae-ba91-b61aec61b026/image.png)

- 메모리 공간을 미리 고정된 크기로 분할하는 방식
- 각 프로세스를 하나의 Partition에 적재
- Partition의 수가 K개이면, Multiprogramming degree = K
- 메모리 관리가 편하지만 시스템 자원이 낭비될 수 있다.

# Fragmentation (단편화)

## Internal Fragmentation

할당된 메모리 공간 Partition의 크기가 프로세스의 크기보다 큰 경우 메모리 공간이 낭비된다.

## External fragmentation

남은 메모리 크기가 프로세스의 크기보다 큰 경우 메모리 공간이 낭비된다.

# Variable Partition Multiprogramming (VPM)

![Variable Partition Multiprogramming 1](https://velog.velcdn.com/images/sunkeydokey/post/83953ee6-6006-45a3-ab7c-63a375cb13e4/image.png)

![Variable Partition Multiprogramming 2](https://velog.velcdn.com/images/sunkeydokey/post/fd1642f8-3ebb-48f7-8100-ed95f6a2e9ee/image.png)

초기에는 메모리 전체를 하나의 영역으로 두고, 프로세스 처리 과정에서 메모리 공간을 동적으로 분할하는 방식

# VPM에서의 배치전략

![배치전략](https://velog.velcdn.com/images/sunkeydokey/post/21ddbe46-6367-4479-9cd9-358c881e64e6/image.png)

## First-fit

충분한 크기를 가진 첫 번째 Partition을 선택한다. 간단하고 비용이 적으나 공간활용률이 떨어질 수 있다.

## Best-fit

프로세스가 들어갈 수 있는 Partition 중 가장 작은 영역을 선택한다. 크기가 큰 Partiton을 유지할 수 있다. 그러나 탐색시간이 오래걸리고 작은 크기의 Partition 조각이 많이 발생한다.

## Worst-fit

프로세스가 들어갈 수 있는 Partiton 중 가장 큰 영역을 선택한다. 작은 크기의 Partition 조각들이 발생하는 것을 줄일 수 있으나, 큰 크기의 Partition을 확보하기 어렵고 탐색시간도 오래 걸린다.

## Next-fit

State table에서 마지막으로 탐색한 위치부터 탐색한다. 메모리 영역의 사용빈도를 균등하게 하며 비용이 적다.

## Coalescing holes (공간 통합)

![Coalescing holes](https://velog.velcdn.com/images/sunkeydokey/post/57ed5b9f-a96e-4643-9835-af8d61d74e36/image.png)

프로세스가 나간 후 인접한 빈 영역을 하나의 Partition으로 통합하는 방식이다. 비용이 적다.

## Storage Compaction (메모리 압축)

![Storage Compaction](https://velog.velcdn.com/images/sunkeydokey/post/7f67bc52-8ef4-477e-b003-8afe2984f3d7/image.png)

모든 빈 공간을 하나로 통합한다. 많은 시스템 자원을 소비하고 모든 프로세스를 재배치하기 때문에 비용이 크다. 따라서 프로세스에 필요한 적재공간 확보가 필요할 때 수행해야 한다.
