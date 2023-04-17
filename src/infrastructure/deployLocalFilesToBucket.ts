import { Construct } from "constructs";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3 from "aws-cdk-lib/aws-s3";

export interface DeployLocalFilesToBucketProps {
    siteBucket: s3.Bucket
    distribution: cloudfront.Distribution
}
export class DeployLocalFilesToBucket extends Construct {
    constructor(scope: Construct, id: string, props: DeployLocalFilesToBucketProps) {
        super(scope, id)
        new s3deploy.BucketDeployment(this, "DeployWithInvalidation",
            {
                sources: [s3deploy.Source.asset("./src/runtime/site-contents")],
                destinationBucket: props.siteBucket,
                distribution: props.distribution,
                distributionPaths: ["/*"],
            })
    }
}