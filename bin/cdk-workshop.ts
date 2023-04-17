#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DeploymentStack } from '../src/deploymentStack';

const app = new cdk.App();
new DeploymentStack(app, 'Combos');
