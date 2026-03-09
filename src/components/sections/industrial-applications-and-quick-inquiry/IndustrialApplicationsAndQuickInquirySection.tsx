import { IndustrialApplications } from './(components)/industrial-applications'
import { QuickInquiry } from './(components)/quick-inquiry'

export function IndustrialApplicationsAndQuickInquiry() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 layout-container p-3 md:p-[60px]">
            <IndustrialApplications />
            <QuickInquiry />
        </div>
    )
}
