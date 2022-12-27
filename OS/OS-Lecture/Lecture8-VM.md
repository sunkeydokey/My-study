[HPC Lab. KOREATECH 채널 OS 강의](https://www.youtube.com/playlist?list=PLBrGAFAIyf5rby7QylRc6JxU5lzQ9c4tN)를 듣고 정리

# 배우게 된 것

- 가상 메모리
- Non-continuous allocation
- Non-continuous allocation의 Address Mapping
- Non-continuous allocation 기법들

# 가상 메모리 (Virtual Storage)

- Non-continuous allocation (비연속 할당)
- 프로그램을 여러 개의 Block으로 분할하고 실행 시에 필요한 Block들만 메모리에 적재하는 것
- 나머지 Block들은 Swap device에 둔다.

# Non-continuous allocation의 Address Mapping

![Address Mapping](https://velog.velcdn.com/images/sunkeydokey/post/7f413629-878a-43ff-9006-4c85744c3658/image.png)

- 가상주소 (Virtual address) : 논리 주소, 연속된 메모리 할당을 가정한 주소
- 실제 주소 (Real address) : 실제 메모리에 적재된 주소
- Address Mapping : 가상 주소를 실제 주소로 바꿔준다.

# Block Mapping

![Block Mapping1](https://velog.velcdn.com/images/sunkeydokey/post/217feb78-5fa2-47ed-b1bd-bc7e36abe703/image.png)

![Block Mapping2](https://velog.velcdn.com/images/sunkeydokey/post/d4548a11-bde7-4834-8701-56fa26e64698/image.png)

- Address mapping 정보를 관리하는 Block map table(BMT)이 있다.
- 커널 공간에서 프로세스마다 하나의 BMT를 가지고 있다.

# Paging System

![Paging System](https://velog.velcdn.com/images/sunkeydokey/post/e5f2ed18-e41a-48b6-aa26-5c21a9e7fba3/image.png)

## Paging System

- 프로그램을 같은 크기의 블럭(Pages)으로 분할한다.
- Page frame : 메모리의 분할 영역, Page와 같은 크기로 분할된다.
- 논리적 분할이 아닌 크기에 따른 분할이다.
- 간단하고 효율적이다.
- 외부 단편화가 발생하지 않는다. (내부 단편화는 발생할 수 있다.)

## Paging System의 Address Mapping

![Paging System의 Address Mapping](https://velog.velcdn.com/images/sunkeydokey/post/48eb3b43-231d-4294-8227-cce155eac499/image.png)

- Virtual address : v = (p : page number, d : displacement)
- Address mapping : PMT (Page Map Table) 사용
- Address mapping mechanism
  - Direct mapping
    - Associative mapping
    - Hybrid

## Direct mapping

![Direct mapping](https://velog.velcdn.com/images/sunkeydokey/post/ecc4cd19-0499-4733-8d2b-77aee051f25d/image.png)

- Block mapping과 유사하다.
- 가정
  - PMT를 커널 안에 저장
    - PMT entry size = entrySize
    - Page size = pageSize
- 문제점 : 메모리 접근 횟수가 2배이다. PMT를 위한 메모리 공간이 필요하다.
- 해결방안 : Associative mapping, PMT 전용의 기억장치 사용 등

## Associative mapping

![Associative mapping](https://velog.velcdn.com/images/sunkeydokey/post/45b14fea-ac12-4d7c-96a6-b497b4ff2a08/image.png)

- TLB(Translation Look-aside Buffer)에 PMT 적재
- PMT를 병렬적으로 탐색한다.
- 비용이 낮고 속도가 빠르다.
- 비싼 HW (큰 PMT는 다루기 어렵다.)

## Hybrid

![Hybrid](https://velog.velcdn.com/images/sunkeydokey/post/9deb1fda-6d54-44a5-9122-b4d2b9cfdaea/image.png)

- Direct mapping과 Associative mapping을 혼합해 HW 비용을 줄이고 Associative mapping의 장점을 활용
- 작은 TLB를 사용한다.

## Paging System의 메모리 관리

![메모리 관리](https://velog.velcdn.com/images/sunkeydokey/post/1e600cbd-2030-4cae-a196-a46e8e9a963c/image.png)

- Page와 같은 크기로 미리 분할 하여 관리/사용 (Page Frame)
- Frame table : Page Frame당 하나의 entry

## Page Sharing

![Page Sharing](https://velog.velcdn.com/images/sunkeydokey/post/17b9b1bd-6d9c-4948-bf4d-bab470eb271a/image.png)

- 여러 프로세스가 특정 Page를 공유할 수 있다.
- 공유 가능한 Page
  - Procedure pages
    - (병행성 제어 기법 관리하에서) Data page

## Summary

![Summary](https://velog.velcdn.com/images/sunkeydokey/post/a7cb0ea4-88e9-4d76-8ba6-4a9d676cf9de/image.png)

# Segmentation system

![Segmentation system](https://velog.velcdn.com/images/sunkeydokey/post/0a1e6217-fa77-4f8c-8417-8a4ca82861e1/image.png)

## Segmentation system

- 프로그램을 논리적 block으로 분할 (segment)
- Block의 크기가 다르기 때문에 메모리를 미리 분할하지 않는다.
- 공유와 보호가 용이하다.
- Address mapping과 메모리 관리 비용이 크다.
- 내부 단편화가 발생하지 않는다. (외부 단편화는 발생할 수 있다.)

## Segmentation system의 Address mapping

![Segmentation system의 Address mapping](https://velog.velcdn.com/images/sunkeydokey/post/06ad216a-7367-404e-b34c-5409b74bbea0/image.png)

- Virtual address : v = (s : segment number, d : displacement)
- Segment Map Table (SMT)
- Address mapping mechanism : Paging System과 유사하다.

## Direct mapping

![Direct mapping](https://velog.velcdn.com/images/sunkeydokey/post/bfa74db3-c3a8-4bfc-95ba-1fe8ee3d2b9e/image.png)

## Segmentation system의 메모리 관리

- VPM과 유사하다. (Segment를 적재할 때 크기에 맞추어 메모리를 분할하고 적재한다.)

## 공유와 보호

Segmentation system에서는 프로그램이 논리적으로 분할되어 있어 공유 및 보호가 용이하다.

## Summary

![Summary](https://velog.velcdn.com/images/sunkeydokey/post/d0e2d56f-a089-4e74-b53b-2d6aa058e868/image.png)

# Paging vs Segmentation

## Paging system

- 단순함
- 낮은 비용
- 비논리적 분할
- 복잡한 Page sharing Mechanism

## Segmentation System

- 높은 관리 비용
- 논리적 분할
- 간단하고 쉬운 분할 Mechanism

# Hybrid Paging/Segmentation

![Hybrid Paging/Segmentation](https://velog.velcdn.com/images/sunkeydokey/post/670e4269-7948-4bb4-acd7-b5cae7f5aec1/image.png)

## Hybrid system

- Paging과 Segmentation의 장점 결합
- 논리 단위의 Segment로 프로그램을 분할한다.
- 각 Segment를 고정된 크기의 Page로 분할한다.
- 메모리에는 Page 단위로 적재된다.

## Hybrid system의 Address mapping

![Hybrid system의 Address mapping](https://velog.velcdn.com/images/sunkeydokey/post/5b39ad45-57e6-42e2-ad06-f4efe1dc0573/image.png)

- Virtual address : v = (s : segment number, p : page number, d : displacement)
- SMT와 PMT를 모두 사용한다.
- 메모리 관리 방식은 FPM과 유사하다.

## Direct mapping

![Direct mapping](https://velog.velcdn.com/images/sunkeydokey/post/5494574a-042c-45f0-b3db-07d46e735bff/image.png)

## Summary

![Summary](https://velog.velcdn.com/images/sunkeydokey/post/0ebbf7fc-c952-4aaf-968a-f7b78f18fb33/image.png)
