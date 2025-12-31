import { useGSAP } from '@gsap/react'
import { Button, Heading } from '@radix-ui/themes'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

/** @see {@link https://tympanus.net/codrops/2025/05/14/from-splittext-to-morphsvg-5-creative-demos-using-free-gsap-plugins/} */
export const SplitTextDemo = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const splitInstance = useRef<SplitText>(null)

  const config = {
    letters: { duration: 0.4, selector: '.letter', stagger: 0.008 },
    lines: { duration: 0.8, selector: '.line', stagger: 0.08 },
    words: { duration: 0.6, selector: '.word', stagger: 0.06 },
  }

  useGSAP(() => {
    CustomEase.create('osmo-ease', '0.625, 0.05, 0, 1')

    splitInstance.current = new SplitText(headingRef.current, {
      charsClass: 'letter',
      linesClass: 'line',
      type: 'lines, words, chars',
      wordsClass: 'word',
    })

    gsap.set('.line', { overflow: 'hidden' })
  }, { scope: divRef })

  const { contextSafe } = useGSAP({ scope: divRef })

  const animate = contextSafe((type: keyof typeof config) => {
    const { duration, selector, stagger } = config[type]
    const targets = headingRef.current!.querySelectorAll(selector)

    gsap.fromTo(targets, { yPercent: 110 }, {
      duration,
      ease: 'osmo-ease',
      overwrite: true,
      stagger,
      yPercent: 0,
    })
  })

  return (
    <div ref={divRef} style={{ padding: '50px' }}>
      <Heading data-split="heading" ref={headingRef} style={{ fontSize: '3rem', lineHeight: '1.2' }}>
        does kindness
        <br />
        plus sadness
        <br />
        equal to
        <br />
        zero?
      </Heading>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {/* <button onClick={() => animate('lines')}>Animate Lines</button> */}
        <Button onClick={() => animate('words')}>Animate</Button>
        {/* <button onClick={() => animate('letters')}>Animate Letters</button> */}
      </div>
    </div>
  )
}
