[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- 가상 메모리 관리의 목적
- 가상 메모리 Cost Model
- 가상 메모리 관리 기법
- Locality
- Replacement strategies Algorithms

# 가상 메모리 관리의 목적

가상 메모리 시스템의 성능을 최적화하기 위해서이다. 성능을 측정하기 위한 Cost Model과 다양한 최적화 기법이 존재한다.

# 가상 메모리 Cost Model

![Cost Model](https://velog.velcdn.com/images/sunkeydokey/post/989c85e7-05e0-417d-9e08-2fa4e8879f81/image.png)

Page Fault frequency 또는 Page Fault Rate를 측정한다. Context switch, 커널 개입 최소화, 시스템 성능 향상 등을 통해 Page Fault Rate를 최소화하는 전략을 설계해야한다.

# 가상 메모리 관리 기법

## HW Components

![HW Component](https://velog.velcdn.com/images/sunkeydokey/post/ec5d6d51-392a-447f-875d-b8820b00c43d/image.png)

메모리에 적재된 각각의 Page가 최근에 참조되었는지 표시하는 Reference bit vector, Page가 메모리에 적재된 후 프로세스에 의해 수정되었는지 표시하는 Update bit vector를 활용한다.

1. 프로세스에 의해 참조되면 해당 Page의 Reference bit vector를 1로 설정한다.
2. 주기적으로 모든 Reference bit를 0으로 초기화한다.
3. Update bit는 주기적 초기화되지 않는다.

## SW Componets

### Allocation strategies (할당)

각 프로세스에 메모리를 얼마나 할당할 것인지에 따라 Fixed allocation (고정 할당)과 Variable allocation (가변 할당)으로 나뉜다.
프로세스 실행에 필요한 메모리 양을 예측해야 한다. 너무 큰 메모리를 할당하면 메모리가 낭비되고, 너무 적은 메모리를 할당하면 Page Fault Rate가 올라가고 시스템 성능이 저하될 것이다.

### Fetch strategies

특정 Page를 메모리에 언제 적재할 것인지에 따라 Demand fetch (demand paging)와 Anticipatory fetch (pre-paging)로 나뉜다.
Demand fetch (demand paging)는 프로세스가 참조하는 페이지들만 적재하고 Page fault 비용이 존재한다.
Anticipatory fetch (pre-paging)는 참조될 가능성이 높은 Page를 예측하고 미리 적재한다. 예측 성공시에는 Page fault 비용이 없다. 다만, 잘못된 예측의 경우 자원 낭비가 크다. 또한 커널의 개입 등 예측비용이 존재하며 Hit ratio에 민감하다.
실제 대부분의 시스템은 일반적으로 준수한 성능을 보여주는 Demand fetch 기법을 사용한다.

### Placement strategies (배치)

Page와 Segment를 어디에 적재할 것인지에 따른 전략이다. Paging system에서는 불필요하다.
Segmentation system에서의 배치 기법들로는 First-fit, Best-fit, Worst-fit, Next-fit이 있다.

### Replacement strategies (교체)

빈 PF가 없는 경우 새로운 Page를 어떤 Page와 교체할 것인지 결정하는 전략이다. 다양한 알고리즘이 존재한다.

### Cleaning strategies (정리)

변경된 Page를 언제 write-back할 지 결정한다. 변경된 내용은 Swap device에 반영된다.
해당 Page가 메모리에서 내려올 때 write-back되면 Demand Cleaning, 더이상 변경될 가능성이 없다고 판단될 때 미리 write-back하는 Anticipatory cleaning이 있다.

### Load control strategies (부하 조절)

![Load control strategies](https://velog.velcdn.com/images/sunkeydokey/post/ed6ec0f5-b18c-4b7b-b61b-5313f34d21e8/image.png)

시스템의 Multi-programming degree를 조절하는 것. 할당 전략과 연계된다. 저부하 상태에서는 시스템 자원이 낭비되고, 고부하 상태의 경우 자원 경쟁이 심화되며 스레싱이 발생하기 때문에 적정수준을 유지해 Pleteau(고원) 영역에 두는 것이 좋다.

# Locality (지역성)

![Locality (지역성)](https://velog.velcdn.com/images/sunkeydokey/post/fd80125e-7ed3-4402-af18-1b0b07642354/image.png)

프로세스가 프로그램/데이터의 특정 영역을 집중적으로 참조하는 현상을 말한다. 프로그램의 루프 구조, 데이터 구조 등이 원인이다. 참조한 영역과 인접한 영역을 참조하는 공간적 지역성과 참조한 영역을 곧 다시 참조하는 시간적 지역성이 있다.

# Replacement strategies Algorithms

![Replacement strategies Algorithms](https://velog.velcdn.com/images/sunkeydokey/post/78a81994-ef08-478e-b6fc-b51da31b5e04/image.png)

## Fixed allocation

### MIN(OPT, B0) algorithm

![MIN(OPT, B0) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/525ab7cf-2294-4c9d-90fa-f0da7d7e977d/image.png)

앞으로 가장 오랫동안 참조되지 않을 page를 교체한다. 다만 Page reference string을 미리 알고 있음을 가정하기 때문에 실현불가능한 기법이다. 그래서 다른 교체 기법들의 성능을 평가하는 도구로 사용된다.

### Random algorithm

무작위로 교체할 Page를 선택한다. 즉 교체를 위한 정책이 존재하지 않는다. Page fault와 별개로 비용이 적다.

### FIFO(First In First Out) algorithm

![FIFO(First In First Out) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/02ef8e91-d53a-4446-b9b9-a93e6acc56b6/image.png)

가장 오래된 Page를 교체한다. 따라서 Page가 적재된 시간을 기억해야한다. Locality가 고려되지 않는 알고리즘으로, 자주 사용되는 page가 교체될 가능성이 높다.

### LRU(Least Recently Used) algorithm

![LRU(Least Recently Used) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/683300f9-c63f-4cfa-a891-0986ae4ef855/image.png)

가장 오랫동안 참조되지 않은 page를 교체한다. page를 참조할 때마다 시간을 기억해야 한다. Locality에 기반을 둔 교체기법이며 MIN algorithm에 근접한 성능을 보여주며, 실제로도 가장 많이 활용된다. 다만 참조 시마다 시간을 기록하는 비용이 있고, Loop실행에 필요한 크기보다 적은 PF가 할당된 경우 page fault의 수가 급격하게 증가한다.

### LFU(Least Frequently Used) algorithm

![LFU(Least Frequently Used) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/e74240af-5c15-43fa-87ec-6acee15a6091/image.png)

참조 횟수가 가장 적은 Page를 교체한다. 참조 시마다 참조횟수를 누적시켜야한다. Locality를 활용하며 LRU 알고리즘보다 비용이 적다. 다만 최근 적재된 page중 참조될 가능성이 높은 page가 교체될 가능성이 있고 참조 횟수를 누적시키는 비용이 존재한다.

### NUR(Not Used Recently) algorithm

![NUR(Not Used Recently) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/3dd00764-539a-4f8c-b852-c76539dfca18/image.png)

LRU 알고리즘보다 적은 비용으로 비슷한 성능을 달성하려는 목적으로 사용한다. Bit vector를 사용한다.

### Clock algorithm

![Clock algorithm 1](https://velog.velcdn.com/images/sunkeydokey/post/072c4a90-0643-441d-a8f6-04c3087295bb/image.png)

![Clock algorithm 2](https://velog.velcdn.com/images/sunkeydokey/post/d393c0a6-46f2-44ce-9f2f-a1b8e3f4c528/image.png)

Pointer를 돌리면서 교체될 page를 결정한다. 현재 가리키고 있는 page의 reference bit를 확인해 0인 경우 교체, 1인 경우 초기화 후 이동한다. 먼저 적재된 page가 교체될 가능성이 높다. 참조를 활용하기 때문에 LRU, NUR등과 유사하다.

### Second chance algorithm

![Second chance algorithm 1](https://velog.velcdn.com/images/sunkeydokey/post/bfd1ad8e-5f03-4948-ab78-14223ed27406/image.png)

![Second chance algorithm 2](https://velog.velcdn.com/images/sunkeydokey/post/cc819e50-57e5-4ac8-bf10-3b95837ad97d/image.png)

Clock algorithm과 유사하다. 다만 Update bit도 함께 고려한다.

- 현재 페이지의 (r, m)을 확인한다.
- (0, 0) : 교체
- (0, 1) : (0, 0)으로 초기화, write-back list에 추가하고 이동한다.
- (1, 0) : (0, 0)으로 초기화 후 이동
- (1, 1) : (0, 1)로 변경 후 이동

## Variable allocation

### WS(Working Set) algorithm

![WS(Working Set) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/b98b8920-903e-4e2a-b54b-2c53b846dc73/image.png)

- Working Set : 프로세스가 특정 시점에 자주 참조하는 Page들의 집합, 최근 일정시간 ∆ 동안 참조된 page들의 집합. 시간에 따라 변한다.
- W(t, ∆)
- Working Set을 항상 메모리에 유지하면서 thrashing이 감소하고 시스템 성능을 향상시킨다.
- Window Size(∆)는 고정
- 성능의 평가 : Page Fault의 수 말고도 할당받은 PF의 수 등 다른 지표를 함께 보아야 한다.
- 특징
  1.  적재되는 page가 없더라도 메모리를 반납하는 page가 있을 수 있다. 2. 새로 적재되는 page가 있더라도 교체되는 page가 없을 수 있다.
- 단점
  1.  Working Set의 관리 비용 2. Page fault가 없어도 Residence Set을 지속적으로 관리해야 한다.

### PFF(Page Fault Frequency) algorithm

![PFF(Page Fault Frequency) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/d6569796-c7fd-4ecf-a887-ace484cf770c/image.png)

Residence set size를 page fault rate에 따라 결정한다. 낮은 경우 프로세스에 할당된 PF수를 줄이고, 높은 경우 늘린다. Page fault 발생시에만 Residence set을 갱신 및 메모리 할당을 하기 때문에 비용이 적다.

### VMIN(Variable MIN) algorithm

![VMIN(Variable MIN) algorithm](https://velog.velcdn.com/images/sunkeydokey/post/e041b139-483e-46a3-984f-c172e603c247/image.png)

Variable allocation 기반 기법 중 가장 optimal하다. 다만 Page reference string을 미리 알고 있어야 하기 때문에 실현 불가능한 기법이다.
page가 참조되면 ∆시간 사이에 다시 참조되는지 확인하여 그 페이지를 유지할지 메모리에서 내릴지 결정한다.
∆ = R(page fault 발생 시 처리 비용) /U(참조 시간 동안 page를 메모리에 유지하는 비용)
