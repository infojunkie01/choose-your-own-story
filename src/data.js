export const data = [
    {
        layer: 0,
        text: `{You} wake to {the} alarm beeping.`,
        image: './images/sun-yellow.png',
        sound:  './audio/alarm.mp3',
        children: [
            {
                layer: 1,
                trigger: 'You',
                text: 'You get up while the birds are still singing.',
                image: './images/sun-blue.png',
                sound:  './audio/transition.mp3',
            },
            {   layer: 1,
                trigger: 'the',
                text: 'The snooze button offers {ten} {more} minutes of sleeping.',
                image: './images/sun-blue.png',
                sound:  './audio/snooze.mp3',
                children: [
                    {
                        layer: 2,
                        trigger: "ten",
                        text: 'Ten more minutes helps the transition to waking',
                        image: './images/sun-orange.png',
                        sound:  './audio/transition.mp3',
                    },
                    {   
                        layer: 2,
                        trigger: "more",
                        text: `More rest is needed, so {another} snooze {is} pleaded.`,
                        image: './images/sun-orange.png',
                        sound:  './audio/snooze.mp3',
                        children: [
                            {
                                layer: 3,
                                trigger: "another",
                                text: `Another ring goes off, and you concede.`,
                                sound:  './audio/concede.mp3',
                               
                            },
                            {   
                                layer: 3,
                                trigger: "is",
                                text: `Is it {so} bad to stay in bed more? Another ring ignored.`,
                                sound:  './audio/snooze.mp3',
                                children: [
                                    {
                                        layer: 4,
                                        trigger: "so",
                                        text: `So here we are, {no} less than two hours later.`,
                                        sound:  './audio/snooze.mp3',
                                        children: [
                                            {
                                                layer: 5,
                                                trigger: "no",
                                                text: `No regrets, for there's nothing greater.`,
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
