// Copyright (C) 2019-2022 Intel Corporation
// Copyright (C) 2022 CVAT.ai Corporation
//
// SPDX-License-Identifier = MIT

/**
 * Share files types
 * @enum {string}
 * @name ShareFileType
 * @memberof module:API.cvat.enums
 * @property {string} DIR 'DIR'
 * @property {string} REG 'REG'
 * @readonly
*/
export enum ShareFileType {
    DIR = 'DIR',
    REG = 'REG',
}

/**
 * Task statuses
 * @enum {string}
 * @name TaskStatus
 * @memberof module:API.cvat.enums
 * @property {string} ANNOTATION 'annotation'
 * @property {string} VALIDATION 'validation'
 * @property {string} COMPLETED 'completed'
 * @readonly
*/
export enum TaskStatus {
    ANNOTATION = 'annotation',
    VALIDATION = 'validation',
    COMPLETED = 'completed',
}

/**
 * Job stages
 * @enum {string}
 * @name JobStage
 * @memberof module:API.cvat.enums
 * @property {string} ANNOTATION 'annotation'
 * @property {string} VALIDATION 'validation'
 * @property {string} ACCEPTANCE 'acceptance'
 * @readonly
*/
export enum JobStage {
    ANNOTATION = 'annotation',
    VALIDATION = 'validation',
    ACCEPTANCE = 'acceptance',
}

/**
 * Job states
 * @enum {string}
 * @name JobState
 * @memberof module:API.cvat.enums
 * @property {string} NEW 'new'
 * @property {string} IN_PROGRESS 'in progress'
 * @property {string} COMPLETED 'completed'
 * @property {string} REJECTED 'rejected'
 * @readonly
*/
export enum JobState {
    NEW = 'new',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed',
    REJECTED = 'rejected',
}

/**
 * Task dimension
 * @enum
 * @name DimensionType
 * @memberof module:API.cvat.enums
 * @property {string} DIMENSION_2D '2d'
 * @property {string} DIMENSION_3D '3d'
 * @readonly
*/
export enum DimensionType {
    DIMENSION_2D = '2d',
    DIMENSION_3D = '3d',
}

/**
 * List of RQ statuses
 * @enum {string}
 * @name RQStatus
 * @memberof module:API.cvat.enums
 * @property {string} QUEUED 'queued'
 * @property {string} STARTED 'started'
 * @property {string} FINISHED 'finished'
 * @property {string} FAILED 'failed'
 * @property {string} UNKNOWN 'unknown'
 * @readonly
*/
export enum RQStatus {
    QUEUED = 'queued',
    STARTED = 'started',
    FINISHED = 'finished',
    FAILED = 'failed',
    UNKNOWN = 'unknown',
}

/**
 * Task modes
 * @enum {string}
 * @name TaskMode
 * @memberof module:API.cvat.enums
 * @property {string} ANNOTATION 'annotation'
 * @property {string} INTERPOLATION 'interpolation'
 * @readonly
*/
export enum TaskMode {
    ANNOTATION = 'annotation',
    INTERPOLATION = 'interpolation',
}

/**
 * Attribute types
 * @enum {string}
 * @name AttributeType
 * @memberof module:API.cvat.enums
 * @property {string} CHECKBOX 'checkbox'
 * @property {string} SELECT 'select'
 * @property {string} RADIO 'radio'
 * @property {string} NUMBER 'number'
 * @property {string} TEXT 'text'
 * @readonly
*/
export enum AttributeType {
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    SELECT = 'select',
    NUMBER = 'number',
    TEXT = 'text',
}

/**
 * Object types
 * @enum {string}
 * @name ObjectType
 * @memberof module:API.cvat.enums
 * @property {string} TAG 'tag'
 * @property {string} SHAPE 'shape'
 * @property {string} TRACK 'track'
 * @readonly
*/
export enum ObjectType {
    TAG = 'tag',
    SHAPE = 'shape',
    TRACK = 'track',
}

/**
 * Object shapes
 * @enum {string}
 * @name ShapeType
 * @memberof module:API.cvat.enums
 * @property {string} RECTANGLE 'rectangle'
 * @property {string} POLYGON 'polygon'
 * @property {string} POLYLINE 'polyline'
 * @property {string} POINTS 'points'
 * @property {string} CUBOID 'cuboid'
 * @property {string} SKELETON 'skeleton'
 * @readonly
*/
export enum ShapeType {
    RECTANGLE = 'rectangle',
    POLYGON = 'polygon',
    POLYLINE = 'polyline',
    POINTS = 'points',
    ELLIPSE = 'ellipse',
    CUBOID = 'cuboid',
    SKELETON = 'skeleton',
}

/**
 * Annotation type
 * @enum {string}
 * @name Source
 * @memberof module:API.cvat.enums
 * @property {string} MANUAL 'manual'
 * @property {string} AUTO 'auto'
 * @readonly
*/
export enum Source {
    MANUAL = 'manual',
    AUTO = 'auto',
}

/**
 * Logger event types
 * @enum {string}
 * @name LogType
 * @memberof module:API.cvat.enums
 * @property {string} loadJob Load job
 * @property {string} saveJob Save job
 * @property {string} restoreJob Restore job
 * @property {string} uploadAnnotations Upload annotations
 * @property {string} sendUserActivity Send user activity
 * @property {string} sendException Send exception
 * @property {string} sendTaskInfo Send task info
 * @property {string} drawObject Draw object
 * @property {string} pasteObject Paste object
 * @property {string} copyObject Copy object
 * @property {string} propagateObject Propagate object
 * @property {string} dragObject Drag object
 * @property {string} resizeObject Resize object
 * @property {string} deleteObject Delete object
 * @property {string} lockObject Lock object
 * @property {string} mergeObjects Merge objects
 * @property {string} changeAttribute Change attribute
 * @property {string} changeLabel Change label
 * @property {string} changeFrame Change frame
 * @property {string} moveImage Move image
 * @property {string} zoomImage Zoom image
 * @property {string} fitImage Fit image
 * @property {string} rotateImage Rotate image
 * @property {string} undoAction Undo action
 * @property {string} redoAction Redo action
 * @property {string} pressShortcut Press shortcut
 * @property {string} debugInfo Debug info
 * @readonly
*/
export enum LogType {
    loadJob = 'Load job',
    saveJob = 'Save job',
    restoreJob = 'Restore job',
    uploadAnnotations = 'Upload annotations',
    sendUserActivity = 'Send user activity',
    sendException = 'Send exception',
    sendTaskInfo = 'Send task info',

    drawObject = 'Draw object',
    pasteObject = 'Paste object',
    copyObject = 'Copy object',
    propagateObject = 'Propagate object',
    dragObject = 'Drag object',
    resizeObject = 'Resize object',
    deleteObject = 'Delete object',
    lockObject = 'Lock object',
    mergeObjects = 'Merge objects',
    changeAttribute = 'Change attribute',
    changeLabel = 'Change label',

    changeFrame = 'Change frame',
    moveImage = 'Move image',
    zoomImage = 'Zoom image',
    fitImage = 'Fit image',
    rotateImage = 'Rotate image',

    undoAction = 'Undo action',
    redoAction = 'Redo action',

    pressShortcut = 'Press shortcut',
    debugInfo = 'Debug info',
}

/**
 * Types of actions with annotations
 * @enum {string}
 * @name HistoryActions
 * @memberof module:API.cvat.enums
 * @property {string} CHANGED_LABEL Changed label
 * @property {string} CHANGED_ATTRIBUTES Changed attributes
 * @property {string} CHANGED_POINTS Changed points
 * @property {string} CHANGED_OUTSIDE Changed outside
 * @property {string} CHANGED_OCCLUDED Changed occluded
 * @property {string} CHANGED_ZORDER Changed z-order
 * @property {string} CHANGED_LOCK Changed lock
 * @property {string} CHANGED_COLOR Changed color
 * @property {string} CHANGED_HIDDEN Changed hidden
 * @property {string} CHANGED_SOURCE Changed source
 * @property {string} MERGED_OBJECTS Merged objects
 * @property {string} SPLITTED_TRACK Splitted track
 * @property {string} GROUPED_OBJECTS Grouped objects
 * @property {string} CREATED_OBJECTS Created objects
 * @property {string} REMOVED_OBJECT Removed object
 * @property {string} REMOVED_FRAME Removed frame
 * @property {string} RESTORED_FRAME Restored frame
 * @readonly
*/
export enum HistoryActions {
    CHANGED_LABEL = 'Changed label',
    CHANGED_ATTRIBUTES = 'Changed attributes',
    CHANGED_POINTS = 'Changed points',
    CHANGED_ROTATION = 'Object rotated',
    CHANGED_OUTSIDE = 'Changed outside',
    CHANGED_OCCLUDED = 'Changed occluded',
    CHANGED_ZORDER = 'Changed z-order',
    CHANGED_KEYFRAME = 'Changed keyframe',
    CHANGED_LOCK = 'Changed lock',
    CHANGED_PINNED = 'Changed pinned',
    CHANGED_COLOR = 'Changed color',
    CHANGED_HIDDEN = 'Changed hidden',
    CHANGED_SOURCE = 'Changed source',
    MERGED_OBJECTS = 'Merged objects',
    SPLITTED_TRACK = 'Splitted track',
    GROUPED_OBJECTS = 'Grouped objects',
    CREATED_OBJECTS = 'Created objects',
    REMOVED_OBJECT = 'Removed object',
    REMOVED_FRAME = 'Removed frame',
    RESTORED_FRAME = 'Restored frame',
}

/**
 * Enum string values.
 * @name ModelType
 * @memberof module:API.cvat.enums
 * @enum {string}
*/
export enum ModelType {
    DETECTOR = 'detector',
    INTERACTOR = 'interactor',
    TRACKER = 'tracker',
}

/**
 * Array of hex colors
 * @name colors
 * @memberof module:API.cvat.enums
 * @type {string[]}
 * @readonly
*/
export const colors = [
    '#33ddff',
    '#fa3253',
    '#34d1b7',
    '#ff007c',
    '#ff6037',
    '#ddff33',
    '#24b353',
    '#b83df5',
    '#66ff66',
    '#32b7fa',
    '#ffcc33',
    '#83e070',
    '#fafa37',
    '#5986b3',
    '#8c78f0',
    '#ff6a4d',
    '#f078f0',
    '#2a7dd1',
    '#b25050',
    '#cc3366',
    '#cc9933',
    '#aaf0d1',
    '#ff00cc',
    '#3df53d',
    '#fa32b7',
    '#fa7dbb',
    '#ff355e',
    '#f59331',
    '#3d3df5',
    '#733380',
];

/**
 * Types of cloud storage providers
 * @enum {string}
 * @name CloudStorageProviderType
 * @memberof module:API.cvat.enums
 * @property {string} AWS_S3 'AWS_S3_BUCKET'
 * @property {string} AZURE 'AZURE_CONTAINER'
 * @property {string} GOOGLE_CLOUD_STORAGE 'GOOGLE_CLOUD_STORAGE'
 * @readonly
*/
export enum CloudStorageProviderType {
    AWS_S3_BUCKET = 'AWS_S3_BUCKET',
    AZURE_CONTAINER = 'AZURE_CONTAINER',
    GOOGLE_CLOUD_STORAGE = 'GOOGLE_CLOUD_STORAGE',
}

/**
 * Types of cloud storage credentials
 * @enum {string}
 * @name CloudStorageCredentialsType
 * @memberof module:API.cvat.enums
 * @property {string} KEY_SECRET_KEY_PAIR 'KEY_SECRET_KEY_PAIR'
 * @property {string} ACCOUNT_NAME_TOKEN_PAIR 'ACCOUNT_NAME_TOKEN_PAIR'
 * @property {string} ANONYMOUS_ACCESS 'ANONYMOUS_ACCESS'
 * @property {string} KEY_FILE_PATH 'KEY_FILE_PATH'
 * @readonly
 */
export enum CloudStorageCredentialsType {
    KEY_SECRET_KEY_PAIR = 'KEY_SECRET_KEY_PAIR',
    ACCOUNT_NAME_TOKEN_PAIR = 'ACCOUNT_NAME_TOKEN_PAIR',
    ANONYMOUS_ACCESS = 'ANONYMOUS_ACCESS',
    KEY_FILE_PATH = 'KEY_FILE_PATH',
}

/**
 * Types of cloud storage statuses
 * @enum {string}
 * @name CloudStorageStatus
 * @memberof module:API.cvat.enums
 * @property {string} AVAILABLE 'AVAILABLE'
 * @property {string} NOT_FOUND 'NOT_FOUND'
 * @property {string} FORBIDDEN 'FORBIDDEN'
 * @readonly
 */
export enum CloudStorageStatus {
    AVAILABLE = 'AVAILABLE',
    NOT_FOUND = 'NOT_FOUND',
    FORBIDDEN = 'FORBIDDEN',
}

/**
 * Membership roles
 * @enum {string}
 * @name MembershipRole
 * @memberof module:API.cvat.enums
 * @property {string} WORKER 'worker'
 * @property {string} SUPERVISOR 'supervisor'
 * @property {string} MAINTAINER 'maintainer'
 * @property {string} OWNER 'owner'
 * @readonly
*/
export enum MembershipRole {
    WORKER = 'worker',
    SUPERVISOR = 'supervisor',
    MAINTAINER = 'maintainer',
    OWNER = 'owner',
}

/**
 * Sorting methods
 * @enum {string}
 * @name SortingMethod
 * @memberof module:API.cvat.enums
 * @property {string} LEXICOGRAPHICAL 'lexicographical'
 * @property {string} NATURAL 'natural'
 * @property {string} PREDEFINED 'predefined'
 * @property {string} RANDOM 'random'
 * @readonly
*/
export enum SortingMethod {
    LEXICOGRAPHICAL = 'lexicographical',
    NATURAL = 'natural',
    PREDEFINED = 'predefined',
    RANDOM = 'random',
}

/**
 * Types of storage locations
 * @enum {string}
 * @name StorageLocation
 * @memberof module:API.cvat.enums
 * @property {string} LOCAL 'local'
 * @property {string} CLOUD_STORAGE 'cloud_storage'
 * @readonly
*/
export enum StorageLocation {
    LOCAL = 'local',
    CLOUD_STORAGE = 'cloud_storage',
}

/**
 * Webhook source types
 * @enum {string}
 * @name WebhookSourceType
 * @memberof module:API.cvat.enums
 * @property {string} ORGANIZATION 'organization'
 * @property {string} PROJECT 'project'
 * @readonly
*/
export enum WebhookSourceType {
    ORGANIZATION = 'organization',
    PROJECT = 'project',
}

/**
 * Webhook content types
 * @enum {string}
 * @name WebhookContentType
 * @memberof module:API.cvat.enums
 * @property {string} JSON 'json'
 * @readonly
*/
export enum WebhookContentType {
    JSON = 'application/json',
}
