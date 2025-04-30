import React from 'react'
import AsOfDates from '../Components/AsOfDates'
import AvailabilityDownloads from '../Components/AvailabilityDownloads'
import ChallengeDownloads from '../Components/ChallengeDownloads'

function Home() {
    return (
        <>
            <div>
                <AsOfDates />
            </div>

            <div>
                <AvailabilityDownloads />
            </div>


            <div>
                <ChallengeDownloads />
            </div>
        </>
    )
}

export default Home