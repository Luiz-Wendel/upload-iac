import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("first-bucket", {
  bucket: "first-bucket",
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

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
