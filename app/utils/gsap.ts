/* eslint-disable @masknet/no-top-level */
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(SplitText, CustomEase, ScrollToPlugin, useGSAP)
