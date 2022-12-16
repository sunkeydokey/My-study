[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- 스케줄링의 개념과 목적
- 시스템 성능 지표
- 스케줄링의 기준
- 스케줄링 단계
- 스케줄링 정책
- 스케줄링 알고리즘

# 스케줄링의 개념과 목적, 시스템 성능 지표

## 개념

자원을 할당할 프로세스를 선택하는 것을 말한다.

## 목적

시스템 자원의 효율적 사용을 통한 시스템 성능의 향상

## 시스템 성능 지표

시스템의 성능을 측정하기 위해선 지표가 필요하다.
시스템 성능 지표들은 다음과 같다.

- 응답시간
- 작업 처리량
- 자원 활용도
- 공평성
- 실행 대기 방지
- 예측 가능성
- etc

  ![응답시간](https://velog.velcdn.com/images/sunkeydokey/post/4dabb0e0-e707-4165-817f-d6e0a894cfba/image.png)

# 스케줄링의 기준

스케줄링 기법들이 고려하는 항목들

- 프로세스의 특성 - Compute-bounded or I/O-bounded

  > CPU 사용시간을 CPU burst, I/O 대기시간을 I/O burst라고 한다.
  > 두 시간의 비중에 따라 Compute-bounded or I/O-bounded로 나눌 수 있다.

- 시스템의 특성
  - Batch or interactive
- 프로세스의 긴급성
  - real time or non-real time
- 프로세스 우선 순위
- 프로세스 총 실행시간

# 스케줄링 단계

스케줄링 단계는 발생하는 빈도와 할당되는 자원에 따라 구분할 수 있다.

![스케줄링 단계](https://velog.velcdn.com/images/sunkeydokey/post/d7029ca7-d958-4496-8dc5-8bcc4e51f0a3/image.png)

## Long-term scheduling

![Long-term scheduling](https://velog.velcdn.com/images/sunkeydokey/post/e06e10ea-fd41-483f-a471-4e646b76b9e7/image.png)

- job scheduling
  - 시스템에 제출 할 작업을 결정
- 멀티 프로그래밍의 정도를 결정
  - 시스템 내에 프로세스 수 조절
- 시분할 시스템에서는 모든 작업을 시스템에 등록하므로 Long-term scheduling이 불필요하다.

## Mid-term scheduling

![Mid-term scheduling](https://velog.velcdn.com/images/sunkeydokey/post/1dac5685-b9c2-4b6c-abba-479b7634f82c/image.png)

- 메모리 할당 결정
  - Swapping
    - Intermediate-level scheduling

## Short-term scheduling

![Short-term scheduling](https://velog.velcdn.com/images/sunkeydokey/post/38928566-d50e-41f6-bb3b-77cc40c198e5/image.png)

- Process scheduling
  - Low-level scheduling
    - 프로세서를 할당할 프로세스를 결정한다.
- 가장 빈번하게 발생하고 매우 빨라야 한다.

# 스케줄링 정책

## 선점 or 비선점

### 선점 스케줄링 (Preemptive scheduling)

- 할당시간 종료, 우선순위 등에 의해 자원을 빼앗길 수 있다.
- 문맥교환 비용이 크다.
- 시분할, 실시간 시스템 등에 적합하다.

### 비선점 스케줄링 (Non-preemptive scheduling)

- 할당받은 자원을 스스로 반납할 때까지 사용한다.
- 문맥교환 비용이 적다.
- 잦은 우선순위의 역전이 일어나고, 프로세스들의 평균 응답시간이 증가한다.

## 우선순위 (Priority)

### 정적 우선순위 (Static priority)

- 프로세스 생성 때 결정된 우선순위가 유지된다.
- 쉬운 구현과 적은 비용
- 시스템 환경변화에 대응하기 어렵다.

### 동적 우선순위 (Dynamic priority)

- 프로세스 상태 변화에 따라 우선순위가 변경된다.
- 구현이 복잡하고 우선순위를 재계산하는 비용이 크다
- 시스템 환경 변화에 유연하게 대응할 수 있다.

# 스케줄링 알고리즘

## 공평성

### FCFS (First-Come-First-Service)

![FCFS](https://velog.velcdn.com/images/sunkeydokey/post/273e2dad-1475-40e1-a343-6fd305a2bc07/image.png)

- 선입선출
- 비선점 스케줄링
- Ready queue에 도착한 시간을 기준으로 프로세스를 먼저 처리한다.
- 차례대로 프로세서에 프로세스를 넘겨주기만 하므로 자원을 효율적으로 사용할 수 있다.
- Batch system에 적합하나 Interactive system에는 부적합하다.
- Convoy Effect 발생
- 평균 응답시간이 길다.

> Convoy Effect란 긴 수행시간을 가진 하나의 프로세스에 의해 다른 프로세스들이 긴 대기시간을 갖게 되는 현상

### RR (Round-Robin)

![RR](https://velog.velcdn.com/images/sunkeydokey/post/5fcc82f0-30d8-4a00-8f86-1d0e4697df94/image.png)

- 선점 스케줄링
- Ready queue에 도착한 시간 기준
- 자원 사용 제한 시간(time quantum)이 있다.
  - 특정 프로세스의 자원 독점을 방지한다.
- 대화형, 시분할 시스템에 적합하다.
- 사용자는 모든 프로세스가 각각의 프로세서 위에서 실행되는 것처럼 느낀다.
- 문맥 교환 비용이 크다.

## 효율성, 성능

### SPN (Shortest-Process-Next)

![SPN](https://velog.velcdn.com/images/sunkeydokey/post/afc64349-b781-48b8-a7a2-8e854e990aab/image.png)

- 비선점 스케줄링
- Burst time이 가장 작은 프로세스를 먼저 처리한다
- 평균 대기시간을 최소화한다.
- 시스템 내의 프로세스 수를 최소화 하여 스케줄링의 부하를 감소시키고 메모리를 절약할 수 있어 시스템 효율을 향상시킨다.
- 많은 프로세스에 빠른 응답시간을 제공한다.
- Burst time이 긴 프로세스는 자원을 할당받지 못하는 Starvation이 발생할 수 있다.
- 정확한 실행시간을 알 수 없다.

### SRTN (Shortest Remaining Time Next)

- SPN의 장점을 극대화한 변형
- 구현 및 사용이 비현실적인 알고리즘
- 선점 스케줄링
- 잔여 실행시간이 더 적은 프로세스가 Ready상태가 되면 선점하는 방식
- 프로세스 생성시에 총 실행 시간 예측이 필요하다.
- 잔여 실행시간을 계속 추적해야 한다.
- 문맥교환 비용이 크다.

### HRRN (High-Response-Ratio-Next)

- SPN의 장점을 살리며 단점인 Starvation을 방지하는 변형
- 프로세스의 대기시간을 고려하는 Aging concept
- Response ratio가 높은 프로세스를 우선하여 처리
- Response ratio = (WT + BT) / BT
- 실행시간 예측 기법이 필요하다.

## Multi-level

### MLQ (Multi-level Queue)

![MLQ](https://velog.velcdn.com/images/sunkeydokey/post/73cb1334-a416-4ac1-bd58-7512e6e8f567/image.png)

- 우선순위별 별도의 Ready queue 계층
- 프로세스는 계층 간 이동이 불가
- 각각의 queue는 자신만의 스케줄링 기법을 가진다.
- queue 사이에는 우선순위 기반의 스케줄링
- 우선순위가 높은 프로세스는 빠른 응답시간을 보장받으나 낮은 queue의 프로세스들에게는 starvation이 발생할 수 있다.
- 여러 개의 queue를 관리하는 스케줄링 비용이 있다.

### MFQ (Multi-level Feedback Queue)

![MFQ](https://velog.velcdn.com/images/sunkeydokey/post/24443f36-a4f3-45e2-8e86-6be6c36cc7b8/image.png)

- 프로세서 사용 패턴을 활용한 피드백을 통해 queue 계층 간 이동이 허용된 MLQ
- 동적 우선순위
- 선점 스케줄링
- 프로세스에 대한 사전 정보 (BT 등) 없이 SPN, SRTN, HRRN 등 기법의 효과를 볼 수 있다.
- 설계 및 구현이 복잡하고 스케줄링 비용이 크다.
- starvation에서 자유롭지 못하다.
