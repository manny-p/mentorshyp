import {future} from '@theme-ui/presets'

const theme = {
    ...future,
    breakpoints: ['40em', '52em', '64em', '80em'],
    // colors: {
    //     ...future.colors,
    //     colorTest: 'yellow',
    //     textTest: 'blue',
    // },
    // fontSize: [16, 20, 24, 32],
    layout: {
        container: {
            // bg: 'transparent',
            display: 'grid',
            gridTemplateColumns: [
                'auto',
                '1fr 4fr'
            ],
            m: 0,
            p: 0,
        },
        nav: {
            gridColumnStart: '1',
            gridColumnEnd: '3',
            // height: '5vh',
        },
        sidebar: {
            gridColumnStart: '1',
            gridColumnEnd: '2',

        },
        video: {
            gridColumnStart: '2',
            gridColumnEnd: '3',
        },

    },
    components: {
        nav: {
            height: '5vh',
            fontSize: [null, 2, 3, 4],
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',

            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'body',
            bg: 'modes.dark.background',
            a: {
                color: 'modes.dark.text',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
        },
        search: {
            justifyContent: 'center',
            alignItems: 'center',
            // mt: 3,
            outline: 'none',
            // pt: 2,
            // pb: 25,
            input: {
                // outline: 'none',
                borderRadius: '.25rem',
                height: 30,
                // pl: '1rem',
                // pr: '1rem',

                // borderStyle: 'none',
                borderColor: 'transparent',
                bg: 'hsla(0,0%,100%,0.5)',
                // boxShadow: '0.025rem 0.05rem 0.25rem black',
                '&:focus': {
                    outline: 'none',
                    color: 'modes.dark.highlight',
                    borderStyle: 'none',
                    borderBottom: 'solid',
                    borderColor: 'modes.dark.highlight',
                    bg: 'modes.dark.background'
                },
            },
            button: {
                borderRadius: '0 .25rem .25rem 0',
                pt: '.25rem',
                pr: '.5rem',
                pl: '.5rem', // mb:'.5rem',
                height: '80%',
                mr: 2,
                fontSize: [1, 2, 3],
                bg: 'modes.dark.secondary',
                color: 'text',
                boxShadow: '0.025rem 0.05rem 0.25rem black',
                '&:focus': {
                    outline: 'none',
                    borderStyle: 'none',
                    borderColor: 'modes.dark.highlight',
                },

            }

        },
        sidebar: {
            height: '95vh',
            bg: 'modes.dark.background',
            opacity: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            channels: {
                fontSize: [1, 2, 3, 4],
                flexDirection: 'column',
                flexGrow: 1,
                flexBasis: 'auto',
                color: 'modes.dark.text',
                fontWeight: '500',
                // textShadow: '.5px .5px 1px black',
                listStyleType: 'none',
                // minHeight: '42.5vh',
                // minWidth: '10vw',
                // m: 0,
                pl: 2,
                // border: '.1rem solid black',
            },
            controls: {
                // m: 'auto',
                // minHeight: '45.5vh',
                // height: '40vh',
                // border: '.1rem solid black',

                plusSign: {
                    justifyContent: 'center',
                    mb: '5rem',
                    logo: {
                        fontSize: 'calc(48px + 46 * ((100vw - 368px) / 800))',
                        color: 'modes.dark.secondary',
                    }
                },
                preferences: {
                    fontSize: [null, 2, 3],
                    justifyContent: 'flex-end',
                    pr: '.5rem',
                    bg: 'modes.dark.highlight',
                },
                logo: {
                    video: {
                        fontSize: 'calc(48px + 46 * ((100vw - 368px) / 800))',
                        color: 'modes.dark.background',
                    }
                }
            }
        },
        main: {
            video: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 99999,
                flexBasis: 0,
                bg: 'modes.dark.background',
                // color: 'modes.dark.text',
                borderBottom: '.1rem solid black',
                // height: '100vh',
                // minHeight: '50vh',
                // minWidth: 320,
                mx: 'auto',
                px: 'auto'
            },
            inactive: {
                videoContainer: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 99999,
                    flexBasis: 0,
                    // bg: 'modes.dark.background',
                    // color: 'modes.dark.text',
                    // height: '100vh',
                    minHeight: '50vh',
                    // minWidth: 320,
                    mx: 'auto',
                    px: 'auto',
                    fontSize: [1, 2, 3, 4],
                },
                avatar: {
                    logo: {
                        fontSize: 'calc(48px + 46 * ((100vw - 368px) / 800))',
                        color: 'modes.dark.background',
                    }
                },

            }
        }
    },
    styles: {
        ...future.styles,
    }
}

export default theme

