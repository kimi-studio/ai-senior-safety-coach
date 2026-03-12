import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, CheckCircle, TrendingUp, Smartphone, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <Heart className="w-6 h-6" />
              <span className="text-xl font-semibold">안심하루 서비스 기획안</span>
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              중장년층 대상<br/>AI 생활 코치 및 안전 알림 서비스
            </h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              매일의 생활 루틴을 도와주고, 필요할 때 가족까지 연결해주는 안심형 AI 코칭 서비스
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/app">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-xl px-8 py-6">
                  프로토타입 체험하기
                </Button>
              </Link>
              <Link href="/caregiver">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-xl px-8 py-6">
                  보호자 화면 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: 프로젝트 개요 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">프로젝트 개요</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🎯</span>
                  서비스 정의
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  중장년층이 매일 쉽게 사용하는 <strong>AI 생활 코치 앱</strong>에
                  <strong> 복약/체크인/안전 알림</strong>과 <strong>보호자 안심 연동</strong>을
                  결합한 라이프케어 서비스입니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">💡</span>
                  핵심 가치
                </h3>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span>건강 기록 앱이 아닌, 실천 중심 코칭 앱</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span>감시가 아닌, 안심 경험 제공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span>가족과 자연스럽게 연결되는 구조</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: 문제 정의 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">해결하려는 문제</h2>
          <p className="text-2xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
            중장년층과 보호자가 겪는 실질적인 Pain Point를 분석했습니다
          </p>

          <div className="space-y-6">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-red-900">
                  👤 본 사용자 (중장년층)의 어려움
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-xl text-red-800">
                    <p>• 건강 앱은 정보는 많지만 실행이 어려움</p>
                    <p>• 복잡한 UI와 많은 기능에 부담감</p>
                    <p>• 복약/운동 루틴이 오래 유지되지 않음</p>
                  </div>
                  <div className="space-y-2 text-xl text-red-800">
                    <p>• 불안하거나 위급할 때 도움 요청이 어려움</p>
                    <p>• 보호자의 '감시'처럼 느껴지는 것을 원치 않음</p>
                    <p>• AI 기능이 생활 행동으로 연결되지 않음</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">
                  👨‍👩‍👦 보호자의 어려움
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-xl text-blue-800">
                    <p>• 부모님 건강이 걱정되지만 상시 확인 불가</p>
                    <p>• 너무 자주 연락하면 부담스러울까 걱정</p>
                  </div>
                  <div className="space-y-2 text-xl text-blue-800">
                    <p>• 과도한 알림으로 피로감 증가</p>
                    <p>• 정말 중요한 상황을 놓칠까 불안</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-teal-50 border-2 border-teal-200">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-teal-900 flex items-center gap-3">
                <Zap className="w-8 h-8" />
                우리의 솔루션
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-xl text-teal-800">
                <div>
                  <strong>복잡한 기능 대신</strong>
                  <p className="mt-2">'오늘 바로 할 수 있는 행동' 중심 설계</p>
                </div>
                <div>
                  <strong>감시 대신</strong>
                  <p className="mt-2">안심 경험으로 설계된 보호자 연동</p>
                </div>
                <div>
                  <strong>진단 대신</strong>
                  <p className="mt-2">생활 코칭과 동기 부여 중심 AI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: 사용자 정의 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">타깃 사용자</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👵</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Primary Persona</h3>
                    <p className="text-2xl text-teal-600">본 사용자 (55~72세)</p>
                  </div>
                </div>

                <div className="space-y-4 text-xl">
                  <div>
                    <strong className="text-gray-900">특징:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                      <li>• 스마트폰 사용 가능하지만 복잡한 앱은 부담</li>
                      <li>• 카카오톡, 유튜브 등 익숙한 앱 주로 사용</li>
                      <li>• 작은 글씨와 복잡한 메뉴를 싫어함</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900">니즈:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                      <li>• 쉽게 이해되는 오늘 할 일</li>
                      <li>• 실천 가능한 건강 조언</li>
                      <li>• 놓치지 않는 알림</li>
                      <li>• 위급 시 빠른 도움 요청</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Secondary Persona</h3>
                    <p className="text-2xl text-blue-600">보호자 (40~60대)</p>
                  </div>
                </div>

                <div className="space-y-4 text-xl">
                  <div>
                    <strong className="text-gray-900">특징:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                      <li>• 부모의 건강과 안전이 걱정됨</li>
                      <li>• 항상 전화할 수는 없는 상황</li>
                      <li>• 과도한 알림은 피하고 싶음</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900">니즈:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                      <li>• 오늘 상태를 한눈에 파악</li>
                      <li>• 정말 중요한 상황만 알림</li>
                      <li>• 빠르게 연락할 수 있는 수단</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: IA 구조 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">정보 구조 (IA)</h2>
          <p className="text-2xl text-center text-gray-600 mb-16">
            사용자와 보호자 모두를 위한 명확한 구조
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-teal-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-teal-900">
                  본 사용자 앱 구조
                </h3>
                <div className="space-y-3 text-xl">
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                    <span className="font-semibold">홈 - 오늘의 요약과 주요 행동</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                    <span className="font-semibold">AI 코칭 - 실천 가능한 제안</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                    <span className="font-semibold">체크인 - 오늘의 컨디션 기록</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">4</div>
                    <span className="font-semibold">복약 관리 - 알림과 기록</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">5</div>
                    <span className="font-semibold">도움 요청 - 안전 센터</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">6</div>
                    <span className="font-semibold">가족 연동 - 공유 설정</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">7</div>
                    <span className="font-semibold">내 기록 - 주간 리포트</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">8</div>
                    <span className="font-semibold">설정 - 접근성 및 개인정보</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-blue-900">
                  보호자 앱 구조
                </h3>
                <div className="space-y-3 text-xl">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                    <span className="font-semibold">오늘 상태 요약 - 한눈에 보기</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                    <span className="font-semibold">활동 이력 - 최근 기록</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                    <span className="font-semibold">알림 설정 - 공유 범위 조절</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">4</div>
                    <span className="font-semibold">빠른 연락 - 전화/메시지</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
                  <h4 className="text-2xl font-bold mb-3 text-blue-900">설계 원칙</h4>
                  <ul className="space-y-2 text-lg text-blue-800">
                    <li>• 필요한 정보만 간결하게</li>
                    <li>• 이상 징후 우선 표시</li>
                    <li>• 즉시 행동 가능한 UI</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: 핵심 플로우 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">핵심 사용자 플로우</h2>

          <div className="space-y-8">
            <Card className="border-l-8 border-l-teal-500">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🌅</span>
                  Flow A. 아침 루틴 시작
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["아침 알림 수신", "홈 진입", "오늘 할 일 확인", "AI 코칭 확인", "첫 번째 행동 실행", "완료 체크"].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-medium">{step}</span>
                      {idx < 5 && <span className="text-gray-400">→</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-l-blue-500">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">💊</span>
                  Flow B. 복약 누락 대응
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["복약 알림 발송", "미확인 상태 지속", "30분 후 재알림", "2시간 미확인", "보호자에게 알림"].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-medium">{step}</span>
                      {idx < 4 && <span className="text-gray-400">→</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-l-orange-500">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🆘</span>
                  Flow C. 위험 상황 도움 요청
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["도움 요청 버튼 선택", "상황 선택", "즉시 액션 제시", "보호자/119 연락"].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-medium">{step}</span>
                      {idx < 3 && <span className="text-gray-400">→</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-l-green-500">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">👨‍👩‍👦</span>
                  Flow D. 보호자 확인
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["보호자 앱 진입", "오늘 요약 확인", "이상 이벤트 확인", "필요 시 바로 연락"].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-medium">{step}</span>
                      {idx < 3 && <span className="text-gray-400">→</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: UX 설계 원칙 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">UX 설계 원칙</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-teal-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-900">중장년 친화 UX</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• 큰 텍스트와 큰 터치 영역</li>
                  <li>• 한 화면 한 가지 핵심 행동</li>
                  <li>• 전문용어보다 생활 언어</li>
                  <li>• 텍스트 + 아이콘 중복 표현</li>
                  <li>• 되돌리기 쉬운 구조</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-900">AI UX 원칙</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• 선택형 코칭 우선</li>
                  <li>• 추천 이유를 짧게 설명</li>
                  <li>• 부담 없는 톤 유지</li>
                  <li>• 의학 진단 아님을 명확히</li>
                  <li>• 실천 가능한 작은 행동</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-900">안전 UX 원칙</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• 공포가 아닌 안심 중심</li>
                  <li>• 단계적 알림 구조</li>
                  <li>• 예외 상황만 보호자 전달</li>
                  <li>• 공유 범위 사용자 통제</li>
                  <li>• 즉시 행동 가능한 UI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: 수익모델 및 확장 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">비즈니스 모델 및 확장 방향</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-purple-900">수익 모델</h3>
                <div className="space-y-4 text-xl">
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <strong className="text-purple-900">Freemium 구독</strong>
                    <p className="text-gray-700 mt-2">기본 무료 + 프리미엄 월 9,900원</p>
                    <p className="text-gray-600 text-lg mt-1">AI 코칭 고도화, 가족 연동 확장</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <strong className="text-purple-900">기관 제휴</strong>
                    <p className="text-gray-700 mt-2">요양원, 복지관, 지자체 B2B</p>
                    <p className="text-gray-600 text-lg mt-1">단체 라이선스 및 맞춤 기능</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <strong className="text-purple-900">보험사 연계</strong>
                    <p className="text-gray-700 mt-2">건강관리 데이터 제휴</p>
                    <p className="text-gray-600 text-lg mt-1">보험료 할인 프로그램 협력</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-pink-900">확장 로드맵</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                      <strong className="text-2xl">MVP (3개월)</strong>
                    </div>
                    <ul className="ml-13 space-y-1 text-lg text-gray-700">
                      <li>• 홈, 코칭, 체크인, 복약, 도움 요청</li>
                      <li>• 보호자 기본 연동</li>
                      <li>• 룰 기반 알림 엔진</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                      <strong className="text-2xl">2차 고도화 (6개월)</strong>
                    </div>
                    <ul className="ml-13 space-y-1 text-lg text-gray-700">
                      <li>• AI 개인화 강화 (LLM 활용)</li>
                      <li>• 장기 트렌드 분석</li>
                      <li>• 음성 인터페이스</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                      <strong className="text-2xl">3차 확장 (12개월)</strong>
                    </div>
                    <ul className="ml-13 space-y-1 text-lg text-gray-700">
                      <li>• 웨어러블 연동 (심박, 활동량)</li>
                      <li>• 기관 제휴 확대</li>
                      <li>• 커뮤니티 기능</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: 기술 스택 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">기술 구현 방향</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-8">
                <Smartphone className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">프론트엔드</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• React Native / Flutter</li>
                  <li>• Android + iOS 동시 지원</li>
                  <li>• 접근성 API 활용</li>
                  <li>• 오프라인 모드 지원</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">백엔드</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• Node.js / FastAPI</li>
                  <li>• PostgreSQL / Redis</li>
                  <li>• 푸시 알림 서비스</li>
                  <li>• 룰 기반 알림 엔진</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI/ML</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• LLM 기반 코칭 생성</li>
                  <li>• 개인화 추천 모델</li>
                  <li>• 안전 카피 프롬프트</li>
                  <li>• 장기 패턴 분석</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: 차별화 포인트 */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">차별화 포인트</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-10 h-10" />
                중장년 최적화 UX
              </h3>
              <p className="text-xl leading-relaxed opacity-90">
                단순히 글씨만 큰 것이 아니라, 인지 부담을 줄이고 실천으로 연결되는
                전체 경험을 설계했습니다. 터치 영역, 정보 밀도, 흐름 모두 중장년층 관점으로 최적화했습니다.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-10 h-10" />
                안심형 보호자 연동
              </h3>
              <p className="text-xl leading-relaxed opacity-90">
                감시가 아닌 안심 경험으로 설계했습니다. 필요한 정보만, 필요한 때만 공유하며,
                본인이 공유 범위를 통제할 수 있어 심리적 부담이 없습니다.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-10 h-10" />
                실천 중심 AI 코칭
              </h3>
              <p className="text-xl leading-relaxed opacity-90">
                복잡한 진단이 아니라 '오늘 바로 할 수 있는 작은 행동'을 제안합니다.
                실천 가능성을 최우선으로 하며, 이유를 함께 설명해 동기를 부여합니다.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-10 h-10" />
                지속 가능한 루틴
              </h3>
              <p className="text-xl leading-relaxed opacity-90">
                일일 체크인, 복약, 코칭의 반복 구조로 습관을 만들고,
                주간 리포트와 칭찬을 통해 동기를 유지합니다. 중도 이탈을 최소화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">프로토타입 체험하기</h2>
          <p className="text-2xl text-gray-600 mb-12">
            실제 동작하는 프로토타입에서 사용자와 보호자 경험을 직접 확인해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app">
              <Button size="lg" className="text-2xl px-10 py-8">
                사용자 프로토타입 시작
              </Button>
            </Link>
            <Link href="/caregiver">
              <Button size="lg" variant="outline" className="text-2xl px-10 py-8">
                보호자 화면 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 fill-white" />
            <p className="text-3xl font-bold">안심하루</p>
          </div>
          <p className="text-xl opacity-75">
            중장년층을 위한 AI 생활 코치 및 안전 알림 서비스
          </p>
          <p className="mt-4 text-lg opacity-60">
            © 2026 안심하루. 위시켓 프로젝트 153134 제안용 프로토타입
          </p>
        </div>
      </footer>
    </div>
  );
}
