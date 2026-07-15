window.STEPS = [
 {
  "kind": "info",
  "t": "요금제 고르기",
  "tag": {},
  "shots": [
   {
    "src": "screens/01_plan.jpg",
    "mk": [
     [
      1,
      50,
      57
     ]
    ]
   }
  ],
  "tips": [
   "알맞은 데이터·통화·문자량을 보고 골라주세요."
  ]
 },
 {
  "kind": "info",
  "t": "개통신청서 작성하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/02_form_1.jpg",
    "mk": [
     [
      1,
      50,
      84
     ]
    ]
   },
   {
    "src": "screens/02_form_2.jpg",
    "mk": [
     [
      2,
      50,
      30
     ]
    ]
   }
  ],
  "tips": [
   "처음이면 [개통신청서 작성하기], 이어서 하려면 [기존 신청서 불러오기].",
   "‘고객 유형’은 내국인(만 19세 이상)."
  ]
 },
 {
  "kind": "info",
  "t": "요금제 확인하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/03_plan_confirm.jpg",
    "mk": [
     [
      1,
      50,
      90
     ]
    ]
   }
  ],
  "tips": [
   "고른 요금제와 월 요금이 맞는지 확인해 주세요."
  ]
 },
 {
  "kind": "choiceSim",
  "t": "개통 방식 고르기",
  "tag": {},
  "shots": [
   {
    "src": "screens/04_sim_type.jpg",
    "mk": [
     [
      1,
      50,
      56
     ],
     [
      2,
      50,
      96
     ]
    ]
   }
  ],
  "prompt": "어떻게 개통하시겠어요?",
  "choices": [
   {
    "key": "esim",
    "label": "eSIM",
    "desc": "칩 없이 바로 개통",
    "n": 1
   },
   {
    "key": "usim",
    "label": "유심카드",
    "desc": "칩을 끼워 개통",
    "n": 2
   }
  ],
  "tips": [
   "eSIM은 휴대폰 안의 ‘디지털 유심’ — 칩 없이 바로 개통(지원폰·Wi-Fi 필요).",
   "유심카드는 실제 칩을 끼우는 방식. 잘 모르면 유심이 쉬워요."
  ]
 },
 {
  "kind": "info",
  "t": "eSIM 준비하기",
  "tag": {
   "sim": "esim"
  },
  "shots": [
   {
    "src": "screens/05_esim_ready.jpg",
    "mk": [
     [
      1,
      50,
      96
     ]
    ]
   }
  ],
  "tips": [
   "eSIM은 Wi-Fi가 꼭 필요해요. 신분증도 준비.",
   "설치는 개통 뒤 문자·알림톡 QR로."
  ]
 },
 {
  "kind": "info",
  "t": "유심 번호 입력하기",
  "tag": {
   "sim": "usim"
  },
  "shots": [
   {
    "src": "screens/06_usim_number.jpg",
    "mk": [
     [
      1,
      50,
      26
     ],
     [
      2,
      50,
      92
     ]
    ]
   }
  ],
  "tips": [
   "유심 뒷면 15자리 숫자를 넣어주세요(앞 8982·끝 F 제외).",
   "번호 위치는 화면의 ‘어떻게 확인하나요?’ 참고. 없으면 ‘유심카드 구매하기’."
  ]
 },
 {
  "kind": "choiceNum",
  "t": "번호 정하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/07_number_choice.jpg",
    "mk": [
     [
      1,
      50,
      24
     ],
     [
      2,
      50,
      38
     ]
    ]
   }
  ],
  "prompt": "번호를 어떻게 하시겠어요?",
  "choices": [
   {
    "key": "mnp",
    "label": "번호이동",
    "desc": "지금 번호 그대로",
    "n": 1
   },
   {
    "key": "new",
    "label": "신규가입",
    "desc": "새 번호 받기",
    "n": 2
   }
  ],
  "tips": [
   "번호이동은 지금 통신사에 ‘번호이동 사전동의’ 먼저.",
   "· SKT 1566-1509(알뜰폰 1599-0133) · KT 1588-2935 · LG U+ 1544-3553",
   "사전동의는 해지 아님 — 개통되면 자동 해지(미리 해지 X). 3개월 내 재이동 불가."
  ]
 },
 {
  "kind": "info",
  "t": "약관 동의하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/08_terms_1.jpg",
    "mk": [
     [
      1,
      11,
      26
     ]
    ]
   },
   {
    "src": "screens/08_terms_2.jpg",
    "mk": []
   }
  ],
  "tips": [
   "[모두 동의합니다]를 누르면 한 번에 체크돼요.",
   "통신·개인정보와 안심 운행보장(보험)을 위한 필수 동의. 해지 시 보험도 종료."
  ]
 },
 {
  "kind": "info",
  "t": "전화번호 확인하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/09_phone_confirm.jpg",
    "mk": [
     [
      1,
      50,
      32
     ],
     [
      2,
      50,
      93
     ]
    ]
   }
  ],
  "tips": [
   "새 번호 생성에 본인 전화 확인이 필요해요. 번호·이메일 입력.",
   "(번호이동) 입력한 번호로 이동되니 맞는지 확인."
  ]
 },
 {
  "kind": "info",
  "t": "본인 인증하기 ①",
  "tag": {},
  "shots": [
   {
    "src": "screens/10_verify1_method.jpg",
    "mk": [
     [
      1,
      27,
      36
     ]
    ]
   },
   {
    "src": "screens/10_verify1_identity.jpg",
    "mk": [
     [
      1,
      28,
      59
     ]
    ]
   }
  ],
  "tips": [
   "[모바일로 인증하기] → 다음 화면에서 [실물신분증 촬영] 선택."
  ]
 },
 {
  "kind": "info",
  "t": "본인 인증하기 ②",
  "tag": {},
  "shots": [
   {
    "src": "screens/11_verify2_guide.jpg",
    "mk": [
     [
      1,
      50,
      80
     ]
    ]
   },
   {
    "src": "screens/11_verify2_capture.jpg",
    "mk": [
     [
      1,
      50,
      42
     ]
    ]
   },
   {
    "src": "screens/11_verify2_info.jpg",
    "mk": [
     [
      1,
      50,
      89
     ]
    ]
   }
  ],
  "tips": [
   "실물 신분증(주민등록증·운전면허증) 준비 — 임시 신분증 불가.",
   "모서리 칸에 맞추면 자동 촬영. 주소가 ‘mis-mobileid’로 바뀌어도 정상.",
   "정보(이름·번호) 확인 후 [다음]. 정보가 틀리면 다시 촬영."
  ]
 },
 {
  "kind": "info",
  "t": "본인 인증하기 ③",
  "tag": {},
  "shots": [
   {
    "src": "screens/12_verify3_face.jpg",
    "mk": [
     [
      1,
      50,
      78
     ]
    ]
   },
   {
    "src": "screens/12_verify3_done.jpg",
    "mk": [
     [
      1,
      50,
      84
     ]
    ]
   }
  ],
  "tips": [
   "신분증 사진과 얼굴 대조 — 밝은 곳·정면, 선글라스·모자·마스크 벗기(신분증 사진과 같은 모습으로).",
   "화면 안내대로 인증하기.",
   "인증 완료 후 [인증완료] 터치."
  ]
 },
 {
  "kind": "info",
  "t": "요금 납부 방법 넣기",
  "tag": {},
  "shots": [
   {
    "src": "screens/13_payment_1.jpg",
    "mk": [
     [
      1,
      30,
      38
     ]
    ]
   },
   {
    "src": "screens/13_payment_2.jpg",
    "mk": [
     [
      2,
      72,
      38
     ]
    ]
   }
  ],
  "tips": [
   "본인 명의 카드·계좌만 등록돼요.",
   "계좌이체는 ARS 인증이 필요할 수 있어요.",
   "매월 20일 자동 출금(휴일 다음 날), 첫 달은 일할 계산."
  ]
 },
 {
  "kind": "info",
  "t": "청구서 받는 방법 고르기",
  "tag": {},
  "shots": [
   {
    "src": "screens/14_bill_method.jpg",
    "mk": [
     [
      1,
      50,
      90
     ]
    ]
   }
  ],
  "tips": [
   "‘모바일로 받기’는 카카오톡으로 청구서를 받는 거예요."
  ]
 },
 {
  "kind": "info",
  "t": "주소 넣기",
  "tag": {},
  "shots": [
   {
    "src": "screens/15_address.jpg",
    "mk": [
     [
      1,
      50,
      90
     ]
    ]
   }
  ],
  "tips": [
   "[주소검색]으로 실제 사는 주소를 넣어주세요."
  ]
 },
 {
  "kind": "info",
  "t": "확인하고 개통하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/16_activate_1.jpg",
    "mk": [
     [
      1,
      50,
      90
     ]
    ]
   },
   {
    "src": "screens/16_activate_2.jpg",
    "mk": []
   },
   {
    "src": "screens/16_activate_3.jpg",
    "mk": []
   }
  ],
  "tips": [
   "내용 맞으면 [개통하기].",
   "‘개통 진행 중’ 화면은 닫지 말고 기다려요(약 3분). 개통시간 신규 08~20·번호이동 10~20시."
  ]
 },
 {
  "kind": "info",
  "t": "휴대폰 정보 올리기",
  "tag": {
   "sim": "esim"
  },
  "shots": [
   {
    "src": "screens/17_device_info.jpg",
    "mk": [
     [
      1,
      50,
      90
     ]
    ]
   }
  ],
  "tips": [
   "전화 앱에서 *#06# → 뜨는 정보 캡처 → [이미지 첨부하기].",
   "캡처가 어려우면 ‘캡처 방법’ 참고. eSIM 개통 때만 있는 단계."
  ]
 },
 {
  "kind": "info",
  "t": "eSIM 설치하기",
  "tag": {
   "sim": "esim"
  },
  "shots": [
   {
    "src": "screens/18_esim_install_1.jpg",
    "mk": [
     [
      1,
      50,
      87
     ]
    ]
   },
   {
    "src": "screens/18_esim_install_2.jpg",
    "mk": []
   }
  ],
  "tips": [
   "문자·알림톡의 ‘eSIM 사용 설정 안내’ QR로 설치.",
   "설치 중 Wi-Fi 유지, 화면 위 ‘KT’ 뜨면 완료."
  ]
 },
 {
  "kind": "info",
  "t": "유심 끼우기",
  "tag": {
   "sim": "usim"
  },
  "shots": [
   {
    "src": "screens/19_usim_insert.jpg",
    "mk": []
   }
  ],
  "tips": [
   "개통이 끝난 뒤 전원 끄고 금색 칩이 아래로 가게 끼운 뒤 전원 켜기.",
   "‘번호 등록’ 화면이 뜨면 전원 2~3번 껐다 켜기."
  ]
 },
 {
  "kind": "info",
  "t": "개통 다 됐는지 확인하기",
  "tag": {},
  "shots": [
   {
    "src": "screens/20_final_check.jpg",
    "mk": []
   }
  ],
  "tips": [
   "화면 위 ‘KT’와 신호, 전화·인터넷 되면 완료.",
   "안 되면 캡시 1551-7783. ‘스테이지파이브’ 문자는 정상."
  ]
 }
];
