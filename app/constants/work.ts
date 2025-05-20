import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'Hacktiv8',
    subtitle: 'Fullstack Javascript',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2021',
    title: 'KodingWorks',
    subtitle: 'Backend Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2021',
    title: 'EdenFarm',
    subtitle: 'Software QA',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2022',
    title: 'XL Axiata',
    subtitle: 'Software QA',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2023 - Present',
    title: 'Confidential',
    subtitle: 'SQA @ AI B2B Startup',
    position: 'right',
  }
]