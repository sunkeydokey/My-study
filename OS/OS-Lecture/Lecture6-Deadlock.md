[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- Deadlock의 개념
- 자원의 분류
- Deadlock을 발생시킬 수 있는 자원의 형태
- Deadlock Model
- Deadlock 발생의 조건
- Deadlock Solution

# Deadlock(교착상태)의 개념

프로세스가 발생 가능성이 없는 이벤트를 기다리는 상태를 말한다.

> Starvation과의 차이점
> Starvation은 Ready상태의 프로세스가 프로세서만 할당받으면 Running이 될 수 있는데 스케쥴링 등에 의해 계속 새치기를 받는 상태
> Deadlock은 프로세스가 Blocked 이후로 이벤트 또는 자원을 기다리고 있지만 그 가능성이 없는 상태

# 자원의 분류

## 일반적 분류

HW Resource와 SW Resource

## 선점 가능 여부에 따른 분류

### Preemptible resources

- 선점된 후 복귀해도 문제가 발생하지 않는 자원
- 프로세서, 메모리 등

### Non-preemptible resources

- 선점되면 이후 진행에 문제가 발생하는 자원
- Rollback, restrrt 등 특별한 동작이 필요
- 디스크 드라이브 등

## 할당 단위에 따른 분류

### Total allocation resources

- 자원 전체를 프로세스에 할당
- 프로세서, 디스크 드라이브 등

### Partitioned allocation resources

- 하나의 자원을 여러 조작으로 나누어 여러 프로세스들에 할당
- 메모리 등

## 동시 사용 가능 여부에 따른 분류

### Exclusive allocation resources

- 한 순간에 한 프로세스만 사용 가능한 자원
- 프로세서, 메모리, 디스크 드라이브 등

### Shared allocation resource

- 여러 프로세스가 동시에 사용 가능한 자원
- 프로그램(SW), 공유데이터(읽기 등의 경우) 등

## 재사용 가능 여부에 따른 분류

### SR(Serially-reusable Resources)

- 시스템 내에 항상 존재하는 자원
- 사용이 끝나면 다른 프로세스가 사용 가능함
- 프로세서, 메모리, 디스크 드라이브, 프로그램 등

### CR (Consumable Resources)

- 한 프로세스가 사용한 후에는 사라지는 자원
- 신호, 메세지 등

# Deadlock을 발생시킬 수 있는 자원의 형태

- Non-preemptible resources
- Exclusive allocation resources
- SR(Serially-reusable Resources)
- CR (Consumable Resources) 다만 CR에 의한 Deadlock을 가정하는 것은 너무 복잡한 문제
- 할당의 단위는 영향을 미치지 않음

# Deadlock Model (표현법)

## Graph Model

![Graph Model](https://velog.velcdn.com/images/sunkeydokey/post/3f5af4a2-46fa-4d61-858a-759b4c44c1b7/image.png)

- 프로세스 노드와 자원 노드가 존재함
- 자원이 프로세스에 할당됨을 뜻하는 엣지
- 프로세스가 자원을 요청함을 뜻하는 엣지

## State Transition Model

![State Transition Model](https://velog.velcdn.com/images/sunkeydokey/post/81ea41c9-c65c-41d4-abab-a84537546072/image.png)

자원이 두 개인 경우, 두 프로세스가 자원을 한 개를 가지고 있는데 나머지 서로의 하나를 요착하는 경우인 S33에서 Deadlock이 발생한다.

# Deadlock 발생의 조건

## 자원의 특성

- Exclusive use of resources (배타적 사용 자원)
- Non-preemptible resources (비선점 자원)

## 프로세스의 특성

- Hold and Wait (자원을 하나 hold하고 다른 자원을 요청할 때)
- Circular wait (Graph Model 예시와 같이 자원-프로세스 관계가 원형을 이루고 있는 경우)

# Deadlock Solution

## Prevention (방지)

Deadlock은 발생조건이 모두 충족된 경우에 발생한다. 따라서 4조건 중 하나를 제거하면 방지가 가능하다. 아래의 방법들이 있으나 심각한 자원의 낭비를 초래하며 비현실적이다.

### Exclusive use of resources 조건 제거

모든 자원을 공유할 수 있도록 허용하면 되나, 현실적으로 불가능하다.

### Non-preemptible resources 조건 제거

모든 자원에 대해 Preemption을 허용하면 되나, 현실적으로 불가능하다. 다만 유사한 방법으로 프로세스가 할당받을 수 없는 자원을 요청하면 기존에 가진 자원을 모두 반납하고 작업을 취소하는 것이 있겠으나 심각한 자원낭비가 발생하며 이또한 비현실적이다.

### Hold and Wait 조건 제거

필요한 자원을 한번에 모두 할당하면 된다. 그러나 필요하지 않은 순간에도 자원을 가지고 있는 경우가 생겨 자원이 낭비되며 무한대기현상이 발생할 수 있다.

### Circular wait 조건 제거

자원들에 순서를 부여하면 된다. 프로세스는 순서의 증가방향으로만 자원을 요청할 수 있다. 하지만 다음 순서의 자원은 할당받을 수 있는데도 순서가 오지 않아 받지 못하는 자원의 낭비가 발생한다.

## Avoidance (회피)

시스템의 상태를 계속 감시하면서 Deadlock상태가 될 가능성이 있는 자원할당요청을 보류한다. 이러한 방식으로 시스템을 항상 Safe State로 유지하는 방식이다. 다만 시스템 감시에 의한 비용이 크고 Safe state 유지를 위해 사용되지 않는 자원이 있다. 그리고 프로세스와 자원의 수가 고정되어 있으며 필요한 최대 자원의 수를 이미 알고 있다는 가정이 필요해 실용적이지는 않다.

### Safe state

- 모든 프로세스를 정상적으로 종료할 수 있는 상태
- Safe sequence가 존재하여 Deadlock 상태가 되지 않도록 보장한다.

### Unsafe state

- 반드시 발생하는 것은 아니나 Deadlock 가능성이 있는 상태

### Dijkstra’s banker’s algorithm

- Deadlock Avoidance를 위한 간단한 이론적 기법
- 한 종류의 자원이 여러 개 있다는 가정
- 시스템을 항상 Safe state로 유지

![Dijkstra’s banker’s algorithm](https://velog.velcdn.com/images/sunkeydokey/post/1f7073cf-aa28-4e67-b54b-5ac82b511207/image.png)

현재 할당된 자원의 수는 10개 중 8개이므로 P1에 남은 2개를 할당한 후 반납받는다. 3개의 자원이 다시 돌아오므로 3개가 더 필요한 P3에 할당한다. 완료 후 5개를 돌려받아 4개를 P2에 할당하면 Deadlock을 회피하며 Safe state를 유지할 수 있다.

### Habermann’s algorithm

- Dijkstra’s banker’s algorithm의 확장
- 여러 종류의 자원이 있는 상황을 고려
- 시스템을 항상 Safe state로 유지

![Habermann’s algorithm](https://velog.velcdn.com/images/sunkeydokey/post/c8dd8a78-1b73-4c8c-a6cf-23d1dc96ff2e/image.png)

가용 자원은 3, 3, 2. P2나 P4에 자원을 먼저 할당한 후 반납받으면서 나머지 프로세스에도 Safe state를 유지할 수 있다.

## Detection (탐지)

Deadlock 발생을 막는 작업이 없고 주기적으로 Deadlock 발생을 확인한다. Resource Allocation Graph(RAG)을 사용한다.

![Detection](https://velog.velcdn.com/images/sunkeydokey/post/e705b78a-c320-48cd-b705-3584a114a8af/image.png)

### Method : Graph reduction

- 주어진 RAG에서 edge를 하나씩 지워 모든 edge가 지워진다면 Deadlock 프로세스가 없는 상태.
- 프로세스가 요청한 자원 수 <= 남은 자원의 수
- 검사 주기에 따른 비용이 발생한다.

### Avoidance vs Detection

Avoidance는 최악의 경우를 생각하며 Deadlock이 발생하지 않도록 한다. 반면, Detection은 현재 상태만 고려하여 최선의 경우를 생각한다. Detection의 경우 추가적으로 Deadlock이 발생하면 Recovery과정이 필요하다.

## Deadlock Recovery

Deadlock Detection 후 Deadlock을 해결하는 과정

### Process termination

- Lowest-termination cost process first
  - 간편하고 비용이 적지만 Deadlock 해결에 불필요한 프로세스 종료 가능성이 높다.
- Minimum cost recovery
  - 최소비용으로 Deadlock을 해결할 수 있는 경우의 수를 고려하기 때문에 비용이 크다.

### Resource preemption

- Deadlock 상태 해결을 위해 선점할 자원을 선택
- 해당 자원을 가진 프로세스를 종료
- Deadlock 상태가 아닌 프로세스가 종료될 수 있다.
- 선점할 자원 선택을 위해 Preemption cost model 이 필요하다.
- Minimum cost recovery를 사용하기에 비용이 크다.

### Checkpoint-restart method

- 프로세스의 수행 중 Checkpoint마다 Context를 저장
- 강제 종료 후 Rollback시에 최근의 checkpoint에서 재시작
