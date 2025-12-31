/* eslint-disable @masknet/no-top-level */
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(SplitText, CustomEase, useGSAP)
