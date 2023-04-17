import { Stack } from "aws-cdk-lib"
import { Construct } from "constructs"
import { S3StaticSite } from "./infrastructure/s3StaticSite"
import { DeployLocalFilesToBucket } from "./infrastructure/deployLocalFilesToBucket"

export class DeploymentStack extends Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id)
        const site = new S3StaticSite(this, "StaticSite")
        const siteDeployment = new DeployLocalFilesToBucket(
            this,
            "StaticSiteDeployment",
            {
                siteBucket: site.siteBucket,
                distribution: site.distribution,
            }
        )
    }
}