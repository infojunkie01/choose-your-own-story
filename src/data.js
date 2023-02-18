export const data = [
    {
        layer: 0,
        text: `{You} wake to {the} alarm beeping.`,
        image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/alarm.gif?raw=true',
        sound:  './audio/alarm.mp3',
        children: [
            {
                layer: 1,
                trigger: 'You',
                text: 'You get up while the birds are still singing.',
                image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/wake-on-time.gif?raw=true',
                sound:  './audio/bird.mp3',
            },
            {   layer: 1,
                trigger: 'the',
                text: 'The snooze button offers {ten} {more} minutes of sleeping.',
                image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/snooze1.gif?raw=true',
                sound:  './audio/snooze.mp3',
                children: [
                    {
                        layer: 2,
                        trigger: "ten",
                        text: 'Ten more minutes helps the transition to waking',
                        image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/transition.gif?raw=true',
                        sound:  './audio/transition.mp3',
                    },
                    {   
                        layer: 2,
                        trigger: "more",
                        text: `More rest {is} needed, so {another} snooze is pleaded.`,
                        image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/snooze2.gif?raw=true',
                        sound:  './audio/snooze.mp3',
                        children: [
                            {
                                layer: 3,
                                trigger: "another",
                                text: `Another ring goes off, and you concede.`,
                                image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/concede.gif?raw=true',
                                sound:  './audio/concede.mp3',
                               
                            },
                            {   
                                layer: 3,
                                trigger: "is",
                                text: `Is it {so} bad to stay in bed more? Another ring ignored.`,
                                image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/ignore.gif?raw=true',
                                sound:  './audio/snooze.mp3',
                                children: [
                                    {
                                        layer: 4,
                                        trigger: "so",
                                        text: `So here we are, {no} less than two hours later.`,
                                        image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/two-hours-later.gif?raw=true',
                                        sound:  './audio/popup.mp3',
                                        children: [
                                            {
                                                layer: 5,
                                                trigger: "no",
                                                text: `No regrets, for there's nothing greater!`,
                                                image: 'https://github.com/infojunkie01/when-will-you-wake-up/blob/main/public/images/slept-in.gif?raw=true',
                                                sound:  './audio/slept-in.mp3',
                                            }
                                        ]
                                       
                                    },
                                ]
                            },
                        ]
                    },
                        ]
                    }, 

        ]    
    },
  
]
