import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("pos-rocketseat-first-bucket", {
  bucket: "first-bucket",
  tags: {
    IAC: "true",
  }
});

const secondBucket = new aws.s3.Bucket("pos-rocketseat-second-bucket", {
  bucket: "second-bucket",
  tags: {
    IAC: "true",
  }
});

const ecr = new aws.ecr.Repository("first-repository", {
  name: "first-repository",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  }
});

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
