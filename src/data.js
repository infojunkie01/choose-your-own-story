export const data = [
    {
        layer: 0,
        text: `{You} wake to {the} alarm beeping.`,
        image: './when-will-you-wake-up/images/alarm.gif',
        sound:  './when-will-you-wake-up/audio/alarm.mp3',
        children: [
            {
                layer: 1,
                trigger: 'You',
                text: 'You get up while the birds are still singing.',
                image: './when-will-you-wake-up/images/wake-on-time.gif',
                sound:  './when-will-you-wake-up/audio/bird.mp3',
            },
            {   layer: 1,
                trigger: 'the',
                text: 'The snooze button offers {ten} {more} minutes of sleeping.',
                image: './when-will-you-wake-up/images/snooze1.gif',
                sound:  './when-will-you-wake-up/audio/snooze.mp3',
                children: [
                    {
                        layer: 2,
                        trigger: "ten",
                        text: 'Ten more minutes helps the transition to waking',
                        image: './when-will-you-wake-up/images/transition.gif',
                        sound:  './when-will-you-wake-up/audio/transition.mp3',
                    },
                    {   
                        layer: 2,
                        trigger: "more",
                        text: `More rest {is} needed, so {another} snooze is pleaded.`,
                        image: './when-will-you-wake-up/images/snooze2.gif',
                        sound:  './when-will-you-wake-up/audio/snooze.mp3',
                        children: [
                            {
                                layer: 3,
                                trigger: "another",
                                text: `Another ring goes off, and you concede.`,
                                image: './when-will-you-wake-up/images/concede.gif',
                                sound:  './when-will-you-wake-up/audio/concede.mp3',
                               
                            },
                            {   
                                layer: 3,
                                trigger: "is",
                                text: `Is it {so} bad to stay in bed more? Another ring ignored.`,
                                image: './when-will-you-wake-up/images/ignore.gif',
                                sound:  './when-will-you-wake-up/audio/snooze.mp3',
                                children: [
                                    {
                                        layer: 4,
                                        trigger: "so",
                                        text: `So here we are, {no} less than two hours later.`,
                                        image: './when-will-you-wake-up/images/two-hours-later.gif',
                                        sound:  './when-will-you-wake-up/audio/popup.mp3',
                                        children: [
                                            {
                                                layer: 5,
                                                trigger: "no",
                                                text: `No regrets, for there's nothing greater!`,
                                                image: './when-will-you-wake-up/images/slept-in.gif',
                                                sound:  './when-will-you-wake-up/audio/slept-in.mp3',
                                            }
                                        ]
                                       
                                    },
                                    {   
                                        layer: 4,
                                        trigger: "is",
                                        text: `Is it so bad to stay in bed more? Another ring ignored.`,
                                        children: [
                                            
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
