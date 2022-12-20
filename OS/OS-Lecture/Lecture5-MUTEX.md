[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- 프로세스 동기화
- Critical Section (임계영역)
- 상호 배제
- 상호 배제 솔루션들

# 프로세스 동기화 (Synchronization)

다중 프로그래밍 시스템에서 여러 개의 프로세스들이 독립적으로 동작한다. 이 때 공유하는 자원이나 데이터에 접근하는 경우 문제가 발생할 수 있다. 즉, 병행 수행중인 비동기적 프로세스들이 공유 자원에 동시 접근하는 문제를 방지하여야 한다. 따라서 프로세스들이 서로 정보를 공유하고 동작을 맞추도록 하는 동기화(Synchronization)가 필요하다.

# 주요 용어

- Shared data : 여러 프로세스들이 공유하는 데이터
- Critical section : 공유 데이터를 접근하는 코드
- Mutual exclusion (MUTEX) : 둘 이상의 프로세스가 동시에 Critical section에 접근하는 것을 막는 것

# 상호배제 기본 연산 (MUTEX Primitives)

## 연산

- EnterCS() : CS 진입 전 다른 프로세스가 CS 안에 있는지 검사
- ExitCS() : CS를 벗어날 때의 후처리. CS를 벗어남을 시스템이 알림

## 요구사항

- Mutual exclution : CS에 프로세스가 있으면 다른 프로세스의 진입을 금지
- Progress : CS안에 있는 프로세스 외에는 다른 프로세스가 CS에 진입하는 것을 방해하면 안 됨
- Bounded waiting : 프로세스의 CS 진입은 유한한 시간 내에 허용되어야 함

# Two Process MUTEX

## Turn

![Turn](https://velog.velcdn.com/images/sunkeydokey/post/99b21ce8-32d9-4353-965c-5c2edc2fe770/image.png)

프로세스가 자신의 차례인 경우에 CS에 진입한 후 벗어나면서 턴을 넘겨주는 방식

> 이 방식은 Progress를 위배한다.

1. P0이 CS에 들어가기 전에 프로세서를 빼앗긴다면 턴을 넘기지 못한 채 종료되므로 CS에 아무 프로세스도 들어가지 못하는 경우 발생
2. P0이 턴을 넘긴 후 P1보다 빨리 Ready Queue에 도착한 경우임에도 자신의 턴이 아니므로 연속하여 CS 진입이 불가

## Flag

### Flag.V1

![Flag1](https://velog.velcdn.com/images/sunkeydokey/post/2d90e742-cbfc-4473-b638-5192f17e4c1e/image.png)

CS진입 전 상대방의 Flag가 들려있는지 확인한 후 Flag를 들고 진입하는 방식

> 이 방식은 Mutual exclusion을 위배한다.
> P0이 깃발을 확인하고 진입을 결정한 뒤에 CS진입 직전에 Preemption이 일어난 경우 P1이 CS진입했음에도 P0이 CS에 진입하는 경우가 발생

### Flag.V2

![Flag2](https://velog.velcdn.com/images/sunkeydokey/post/709eb3c0-6a61-4d56-b095-381897ac33ae/image.png)

자신의 Flag를 먼저 들어 CS진입을 알리는 방식

> Progress, Bounded waiting을 위배한다.
> Flag를 들자마자 Preemption이 발생하면 다음 프로세스가 Flag를 들게되면서 상대방의 Flag상태를 확인하면 상대방은 Flag를 든 채로 종료되었기 때문에 서로 대기상태에 놓인다.

# MUTEX - SW solution

## Two Process MUTEX

### Dekker's Algorithm

![Dekker's Algorithm](https://velog.velcdn.com/images/sunkeydokey/post/c948749d-2b79-4d1f-a535-106d860cc190/image.png)

Flag를 들고 자신의 Turn인지 확인하는 방식

> Two process ME을 보장하는 최초의 알고리즘

### Peterson’s Algorithm

![Peterson’s Algorithm](https://velog.velcdn.com/images/sunkeydokey/post/c4701966-a869-44ca-b1ab-faff4e0a79cd/image.png)

Flag를 통해 의사를 먼저 보이고 Turn을 양보. 늦게 양보한 프로세스가 먼저 진입

## N-Process MUTEX : Dijkstra’s Algorithm

### Dijkstra’s Algorithm의 Flag[] 변수

![변수](https://velog.velcdn.com/images/sunkeydokey/post/90e16e7e-4f93-48ec-aefa-47ce3e77e880/image.png)

### Algorithm

![Dijkstra’s Algorithm](https://velog.velcdn.com/images/sunkeydokey/post/80acc142-42ac-42f3-84d1-e5a38403265b/image.png)

in-CS 상태의 프로세스가 1개일 때 CS 진입

## SW solution의 문제점

- 속도가 느리고 구현이 복잡하다.
- 연산 중 Preemption이 될 수 있다.
- Busy waiting 문제
- 비효율적이다.

# MUTEX - HW solution (TAS instruction)

## TAS instruction

![TAS instruction](https://velog.velcdn.com/images/sunkeydokey/post/b1480217-138c-4cc1-abb7-24c306cc39ab/image.png)

- Test와 Set을 한번에 수행하는 기계어
- 기계어이기 때문에 Atomicity를 보장받아 실행 중 Interrupt를 받지 않는다.
- Lock을 통해 CS진입을 막는다.

![TAS instruction](https://velog.velcdn.com/images/sunkeydokey/post/dd1ed6ca-3d08-4947-b3b4-d29d7770b94c/image.png)

> 다만 세개 이상의 프로세스가 올라와 있는 경우 Bounded waiting을 위배한다.

## N-Process MUTEX

![N-Process MUTEX HW](https://velog.velcdn.com/images/sunkeydokey/post/15913b6d-4e89-4266-870f-6b3fcf36f7c9/image.png)

## HW solution의 특징

- 장점 : 구현이 쉽다.
- 단점 : 여전히 Busy waiting은 해결하지 못해 비효율적이다.

# MUTEX - OS solution

## Spinlock

![Spinlock](https://velog.velcdn.com/images/sunkeydokey/post/70dc0a2b-7584-433a-ae69-7c58a9f6d5f8/image.png)

- atomic연산인 초기화, P(), V() 연산으로만 접근 가능한 정수변수
- 멀티프로세서 시스템에서만 사용할 수 있다.
- 여전히 Busy waiting

## Semaphore

![Semaphore](https://velog.velcdn.com/images/sunkeydokey/post/26eed57e-4d6a-428a-8655-368048ff6051/image.png)

### 개요

- 음이 아닌 자료형 변수 (s)
- 초기화, P(), V() 연산으로만 접근 가능
  - P: Probern (검사)
    - V: Verhogen (증가)
- 임의의 변수 s 하나에 ready queue 하나가 할당됨
- 기다려야 하는 프로세스는 asleep상태가 되면서 NO Busy waiting
- 다만 wakeup 순서는 비결정적이기 때문에 Starvation 발생 가능

### Semaphore를 통한 Producer-Consumer problem 해결

![Producer-Consumer problem](https://velog.velcdn.com/images/sunkeydokey/post/364a9fc7-880b-42df-b364-e3efaa085463/image.png)

#### single buffer

![single buffer](https://velog.velcdn.com/images/sunkeydokey/post/92e950c1-9bc6-4206-8b44-5328f1e1ba5e/image.png)

#### N-buffers

![N-buffers](https://velog.velcdn.com/images/sunkeydokey/post/67fdeafb-2c57-434b-8cb3-b6001e007ad9/image.png)

### Semaphore를 통한 Reader-Writer problem 해결

- Reader들은 동시에 데이터 접근 가능
- Writer들이 동시에 데이터 접근시 동기화 필요
- 데이터의 무결성 보장 필요
- 우선권을 통한 해결

![reader preference solution](https://velog.velcdn.com/images/sunkeydokey/post/c86010cc-0719-4f5c-9b95-491b08beb425/image.png)

## Eventcount/Sequencer

![Eventcount/Sequencer](https://velog.velcdn.com/images/sunkeydokey/post/43e34366-3ce7-42ed-b10c-426265d922da/image.png)

- 은행 번호표와 비슷함
- Statvation 해결
- Semaphore 보다 더 Low-level 제어가 가능

### Sequencer

- ticket() 연산으로 접근가능한 정수형 변수
- Sequencer는 생성시 0으로 초기화되며 감소하지 않음
- 발생사건들의 순서 유지
- ticket(S) : 현재까지 ticket()연산이 호출된 횟수를 반환, atomic

### Eventcount

- 특정 사건의 발생횟수를 기록한 정수형 변수
- 생성시 0으로 초기화되며 감소하지 않음
- read(), advance(), await()연산으로만 접근 가능
- read(E) : 현재의 Eventcount 값 반환
- advance(E) : E를 기다리고 있는 프로세스를 깨움
- await(E, v) : E < v 일 때 연결된 Q에 프로세스를 전달하고 CPU Scheduler 호출

### Producer-Consumer problem 해결

![](https://velog.velcdn.com/images/sunkeydokey/post/06dee1f9-22de-4deb-8c5b-8575e0521d81/image.png)

# Language-Level solution : Monitor

- 사용이 쉬움
- 객체지향 컨셉과 유사
- 장점 : 사용이 쉽고 Deadlock 등의 에러가능성이 낮음
- 단점 : 지원하는 언어에서만 사용 가능하며, 컴파일러가 OS를 이해하고 있어야 함

## Monitor 개요

![Monitor](blob:https://velog.io/92e0218a-1b4f-4593-be49-72af8e2d545f)

- 공유 데이터와 CS의 집합
- Conditional 변수와 wait(), signal() 연산 등

> 한 번에 한 명만 들어갈 수 있는 '책방'에서 공유 데이터인 '책'과 '대출, 반납'을 수행할 수 있는 CS

## Monitor 구조

- Entry queue (진입 큐) : 모니터 내의 procedure 수만큼 존재
- Mutual exclusion : 모니터 내에는 항상 하나의 프로세스만 진입 가능
- Information hiding (정보 은폐) : 공유 데이터는 모니터 내의 프로세스만 접근 가능
- Condition queue (조건 큐) : 모니터 내의 특정 이벤트를 기다리는 프로세스가 대기
- Signaler queue (신호제공자 큐) : 모니터에 항상 하나의 신호제공자 큐가 존재, signal() 명령을 실행한 프로세스가 임시 대기

## 자원 할당 문제

![자원 할당 문제](https://velog.velcdn.com/images/sunkeydokey/post/a2509008-db06-4b83-8789-22e6f7362057/image.png)

## 자원 할당 시나리오

1. 프로세스 P0이 모니터 안에서 자원 R 요청
2. 자원 할당
3. 프로세스 P1, P2 또한 자원 R 요청
4. P0이 R 반환
5. R_Free.signal() 호출에 의해 P1 wakeup
6. 자원 R이 P1에 할당
7. P0이 모니터 안으로 돌아와 남은 작업 수행

## Producer-Consumer Problem

![Producer-Consumer Problem](https://velog.velcdn.com/images/sunkeydokey/post/4676c97b-4a20-48ad-af6d-fad1510c1e5c/image.png)

## Reader-Writer Problem

![Reader-Writer Problem](https://velog.velcdn.com/images/sunkeydokey/post/3c4cbcee-acfe-4270-a846-e752dfd1c3ad/image.png)

## Dining philosopher problem

![Dining philosopher problem](https://velog.velcdn.com/images/sunkeydokey/post/37b9823d-0fc8-4403-b82c-4df6c5e7a3e5/image.png)
