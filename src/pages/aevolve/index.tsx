import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import aevolveMainImg from "./assets/aevolveMain.png";
import aevolveLabsImg from "./assets/aevolveLabs.png";
import CommonImage from "@/components/CommonImage";
import support1Img from "./assets/ecology-1.png";
import support2Img from "./assets/ecology-2.png";
import support3Img from "./assets/ecology-3.png";
import labImg from "./assets/lab.png";
import mentorShipImg from "./assets/tools/mentorship.png";
import demoImg from "./assets/tools/demo.png";
import marketingImg from "./assets/tools/marketing.png";
import networkingImg from "./assets/tools/networking.png";
import workshopsImg from "./assets/tools/workshops.png";
import clsx from "clsx";
import { ToolItem } from "./components/ToolItem";
import { CommonSection } from "@/components/CommonSection";
import { useConfig } from "@/contexts/useConfig/hooks";
import { useDeviceClass } from "@/hooks/useDeviceClass";

type TSupportItem = {
  img: StaticImageData;
  title: string;
  content: string;
};
const supportList: TSupportItem[] = [
  {
    img: support1Img,
    title: "Incubate",
    content:
      "Provide professional guidance, resources, and community support to take your vision from ideation to market success.",
  },
  {
    img: support2Img,
    title: "Connect",
    content:
      "Tap on aelf's global connection of investors and industry professionals to propel your project to new heights.",
  },
  {
    img: support3Img,
    title: "Invest",
    content:
      "Grant access to essential funds, and provide guidance for a sustainable financial model.",
  },
];

export default function AevolvePage(props: any) {
  const deviceClassName = useDeviceClass(styles);
  const { isMobile } = useConfig();

  return (
    <div className={clsx([styles.pageWrap, deviceClassName])}>
      <div className={styles.backgroundWrap}></div>

      <CommonSection
        sectionClassName={styles.bannerPart}
        contentClassName={styles.partContent}
      >
        <div className={styles.bannerLeft}>
          <h3 className={styles.bannerTitle}>AEVOLVE Labs</h3>
          <div className={styles.bannerSubTitle}>
            {
              "Spearheading blockchain innovation with tailored support and mentorship, embracing a chain and vertical agnostic philosophy."
            }
          </div>
        </div>

        <CommonImage className={styles.bannerImg} src={aevolveMainImg} />
      </CommonSection>

      <CommonSection
        sectionClassName={styles.labsPart}
        contentClassName={styles.partContent}
      >
        <CommonImage className={styles.labsImg} src={aevolveLabsImg} />
        <div className={styles.labsContent}>
          {!isMobile && <div className={styles.specialBlock} />}
          <div className={styles.labsDescription}>
            {
              "AEVOLVE Labs is designed to identify and support early-stage blockchain projects that display growth potential. Through the incubator, projects will gain access to vital resources and support. AEVOLVE Labs also serves as a launchpad for new projects venturing into Web3, enabling aspiring projects to become blockchain-enabled."
            }
          </div>
        </div>
      </CommonSection>

      <CommonSection title="3 Pillars of Support">
        <div className={styles.supportListWrap}>
          {supportList.map((item, idx) => (
            <div key={idx} className={styles.supportItemWrap}>
              <CommonImage className={styles.supportItemImg} src={item.img} />
              <div className={styles.supportItemTitle}>{item.title}</div>
              <div className={styles.supportItemContent}>{item.content}</div>
            </div>
          ))}
        </div>
      </CommonSection>

      <CommonSection
        sectionClassName={styles.toolPart}
        contentClassName={styles.partContent}
      >
        <div className={clsx([styles.toolCardCol, styles.toolCardMainCol])}>
          {!isMobile && (
            <CommonImage className={styles.toolLabImgWrap} src={labImg} />
          )}
          <ToolItem
            img={mentorShipImg}
            className={styles.toolItemLatestWrap}
            title="Mentorship"
            content="Receive bespoke 1-1 mentorship to catalyse your development and guide you to success."
          />
        </div>
        <div className={styles.toolCardCol}>
          <ToolItem
            img={demoImg}
            title="Demo Day Pitch"
            content="Showcase your products and offerings to potential investors and partners."
          />
          <ToolItem
            img={workshopsImg}
            className={styles.toolItemLatestWrap}
            title="Workshops"
            content="Exchange ideas and expertise to develop and build your products."
          />
        </div>
        <div className={styles.toolCardCol}>
          <ToolItem
            img={marketingImg}
            title="Marketing"
            content="Receive marketing support while going to market and securing your initial customers."
          />
          <ToolItem
            img={networkingImg}
            className={styles.toolItemLatestWrap}
            title="Networking"
            content="Connect with aelf Ventures, investors. institutions, and industry leaders for funding, collaboration, and listing opportunities."
          />
        </div>
      </CommonSection>

      <CommonSection contentClassName={styles.applyContent}>
        <a
          className={styles.btnWrap}
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9Zti5T4vlTfGboZjNNUGOo462cmQp_p4xWIKitaAP32xnOg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </a>
      </CommonSection>
    </div>
  );
}
