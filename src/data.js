export const data = [
    {
        layer: 0,
        text: `{You} wake to {the} alarm beeping.`,
        image: './images/alarm.gif',
        sound:  './audio/alarm.mp3',
        children: [
            {
                layer: 1,
                trigger: 'You',
                text: 'You get up while the birds are still singing.',
                image: './images/wake-on-time.gif',
                sound:  './audio/bird.mp3',
            },
            {   layer: 1,
                trigger: 'the',
                text: 'The snooze button offers {ten} {more} minutes of sleeping.',
                image: './images/snooze1.gif',
                sound:  './audio/snooze.mp3',
                children: [
                    {
                        layer: 2,
                        trigger: "ten",
                        text: 'Ten more minutes helps the transition to waking',
                        image: './images/transition.gif',
                        sound:  './audio/transition.mp3',
                    },
                    {   
                        layer: 2,
                        trigger: "more",
                        text: `More rest {is} needed, so {another} snooze is pleaded.`,
                        image: './images/snooze2.gif',
                        sound:  './audio/snooze.mp3',
                        children: [
                            {
                                layer: 3,
                                trigger: "another",
                                text: `Another ring goes off, and you concede.`,
                                image: './images/concede.gif',
                                sound:  './audio/concede.mp3',
                               
                            },
                            {   
                                layer: 3,
                                trigger: "is",
                                text: `Is it {so} bad to stay in bed more? Another ring ignored.`,
                                image: './images/ignore.gif',
                                sound:  './audio/snooze.mp3',
                                children: [
                                    {
                                        layer: 4,
                                        trigger: "so",
                                        text: `So here we are, {no} less than two hours later.`,
                                        image: './images/two-hours-later.gif',
                                        sound:  './audio/popup.mp3',
                                        children: [
                                            {
                                                layer: 5,
                                                trigger: "no",
                                                text: `No regrets, for there's nothing greater!`,
                                                image: './images/slept-in.gif',
                                                sound:  './audio/slept-in.mp3',
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
