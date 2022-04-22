import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import ReactPlayer from 'react-player'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              오버 페이는 이제 <span className="text-color-primary">그만!</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              아직도 정가보다 비싸게 XBOX, PS5를 구매하고 계신가요?<br/>
              빠르고 간편하게 정가에 구매하세요.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://open.kakao.com/o/sJDJ2Fbe">
                    프로그램 다운로드
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://stellar-guppy-450.notion.site/281984e4d6ab4e748c0332271eeef43f">
                    사용방법 보기
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">           
              <Image
                className="has-shadow"
                src='https://images.unsplash.com/photo-1649425371646-1466576838c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt="Hero"
                width={896}
                height={504} />
            
          </div>

          <div style={{margin: 20, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <ReactPlayer url='https://youtu.be/wY44dHGsMPs' controls={true} width={'100%'} style={{alignItems: 'center', justifyContent: 'center', margin: 'auto'}} />
          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;