import { Stack, Typography } from "@mui/material"
import FAQs from "src/components/LandingPage/FAQs"
import Hero from "src/components/LandingPage/Hero"
import IntroToGetLinked from "src/components/LandingPage/IntroToGetLinked"
import JudgingCriteria from "src/components/LandingPage/JudgingCriteria"
import PrizesNReward from "src/components/LandingPage/PrizesNRewards"
import RulesNGuidelines from "src/components/LandingPage/RulesNGuidelines"
import Timeline from "src/components/LandingPage/Timeline"
import Layout from "src/components/layouts/MainLayout"



const HomePage = () => {

    return (
        <Layout>
            <Hero />
            <IntroToGetLinked />
            <RulesNGuidelines />
            <JudgingCriteria />
            <FAQs />
            <Timeline />
            <PrizesNReward />
        </Layout>
    )
}

export default HomePage