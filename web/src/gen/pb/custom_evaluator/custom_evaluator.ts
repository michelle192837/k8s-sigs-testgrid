// @generated by protobuf-ts 2.8.3 with parameter long_type_string
// @generated from protobuf file "pb/custom_evaluator/custom_evaluator.proto" (package "testgrid.custom_evaluator", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { TestStatus } from "../test_status/test_status";
// A configuration sub-object used to do custom evaluation of test results.

/**
 * A collection of Rule objects. Used to define many rules.
 *
 * @generated from protobuf message testgrid.custom_evaluator.RuleSet
 */
export interface RuleSet {
    /**
     * @generated from protobuf field: repeated testgrid.custom_evaluator.Rule rules = 1;
     */
    rules: Rule[];
}
/**
 * A single rule that describes how to evaluate a test_cases_pb2.TestResult
 *
 * @generated from protobuf message testgrid.custom_evaluator.Rule
 */
export interface Rule {
    /**
     * Multiple comparisons to run against a result. EVERY TestResultComparison
     * has to succeed for this Rule to succeed.
     *
     * @generated from protobuf field: repeated testgrid.custom_evaluator.TestResultComparison test_result_comparisons = 1;
     */
    testResultComparisons: TestResultComparison[];
    /**
     * Required: The TestStatus to return if the comparison succeeds.
     *
     * @generated from protobuf field: testgrid.test_status.TestStatus computed_status = 3;
     */
    computedStatus: TestStatus;
}
/**
 * Describes how to get information the TestResult proto and how to compare the
 * value against the comparison value.
 *
 * @generated from protobuf message testgrid.custom_evaluator.TestResultComparison
 */
export interface TestResultComparison {
    /**
     * Required: This is the comparison that will be used as
     *
     * @generated from protobuf field: testgrid.custom_evaluator.Comparison comparison = 1;
     */
    comparison?: Comparison;
    /**
     * @generated from protobuf oneof: test_result_info
     */
    testResultInfo: {
        oneofKind: "propertyKey";
        /**
         * The name of the property to evaluate.
         * Properties are usually strings, so a string comparison is assumed and
         * required.
         *
         * @generated from protobuf field: string property_key = 2;
         */
        propertyKey: string;
    } | {
        oneofKind: "testResultField";
        /**
         * This will find the scalar field with the given name within the TestResult
         * proto. The value of that field will be used to evaluate.
         *
         * Accepted junit values for junit results are:
         *   name: name of the test case
         *   error_count: 1 if the test case has an error message
         *   failure_count: 1 if the test case has a failure message
         *
         * NOTE: Only supported for string and numerical values.
         *
         * @generated from protobuf field: string test_result_field = 3;
         */
        testResultField: string;
    } | {
        oneofKind: "testResultErrorField";
        /**
         * This will find the field nested within the first error of the TestResult
         * proto. The value of that field will be used to evaluate.
         *
         * Accepted values for junit results are:
         *   exception_type: the failure and/or error message.
         *
         * NOTE: Only supported for string and numerical values
         *
         * @generated from protobuf field: string test_result_error_field = 4;
         */
        testResultErrorField: string;
    } | {
        oneofKind: "targetStatus";
        /**
         * This will enable the target status comparation. The value of the status
         * will be used to evaluate.
         *
         * @generated from protobuf field: bool target_status = 5;
         */
        targetStatus: boolean;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The method of comparison used for evaluation. Describes how to compare two
 * values.
 *
 * @generated from protobuf message testgrid.custom_evaluator.Comparison
 */
export interface Comparison {
    /**
     * Required: Defines how to compare two attributes.
     * When the TestResult value is numerical, numerical_value will be used to
     * compare. When the TestResult value is a string, string_value will be used.
     *
     * @generated from protobuf field: testgrid.custom_evaluator.Comparison.Operator op = 1;
     */
    op: Comparison_Operator;
    /**
     * @generated from protobuf oneof: comparison_value
     */
    comparisonValue: {
        oneofKind: "stringValue";
        /**
         * For operations EQ, NE, REGEX, STARTS_WITH, CONTAINS
         *
         * @generated from protobuf field: string string_value = 2;
         */
        stringValue: string;
    } | {
        oneofKind: "numericalValue";
        /**
         * For operations EQ, NE, LT, LE, GT, GE
         *
         * @generated from protobuf field: double numerical_value = 3;
         */
        numericalValue: number;
    } | {
        oneofKind: "targetStatusValue";
        /**
         * For operations EQ
         *
         * @generated from protobuf field: testgrid.test_status.TestStatus target_status_value = 4;
         */
        targetStatusValue: TestStatus;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum testgrid.custom_evaluator.Comparison.Operator
 */
export enum Comparison_Operator {
    /**
     * Unknown. May assume OP_EQ for legacy purposes, but should warn.
     *
     * @generated from protobuf enum value: OP_UNKNOWN = 0;
     */
    OP_UNKNOWN = 0,
    /**
     * Equals operator.
     *
     * @generated from protobuf enum value: OP_EQ = 1;
     */
    OP_EQ = 1,
    /**
     * Not equals operator.
     *
     * @generated from protobuf enum value: OP_NE = 2;
     */
    OP_NE = 2,
    /**
     * Comparison value less than TestResult's value
     *
     * @generated from protobuf enum value: OP_LT = 3;
     */
    OP_LT = 3,
    /**
     * Comparison value less than or equal TestResult's value
     *
     * @generated from protobuf enum value: OP_LE = 4;
     */
    OP_LE = 4,
    /**
     * Comparison value greater than TestResult's value
     *
     * @generated from protobuf enum value: OP_GT = 5;
     */
    OP_GT = 5,
    /**
     * Comparison value greater than or equal TestResult's value
     *
     * @generated from protobuf enum value: OP_GE = 6;
     */
    OP_GE = 6,
    /**
     * Regex match of Comparison.value string with the TestResult's evaluation
     * value string.
     *
     * @generated from protobuf enum value: OP_REGEX = 7;
     */
    OP_REGEX = 7,
    /**
     * Checks to see if the evaluation value string starts with the
     * Comparison.value string
     *
     * @generated from protobuf enum value: OP_STARTS_WITH = 8;
     */
    OP_STARTS_WITH = 8,
    /**
     * Checks to see if the evaluation value string is contained within the
     * Comparison.value string
     *
     * @generated from protobuf enum value: OP_CONTAINS = 9;
     */
    OP_CONTAINS = 9
}
// @generated message type with reflection information, may provide speed optimized methods
class RuleSet$Type extends MessageType<RuleSet> {
    constructor() {
        super("testgrid.custom_evaluator.RuleSet", [
            { no: 1, name: "rules", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Rule }
        ]);
    }
    create(value?: PartialMessage<RuleSet>): RuleSet {
        const message = { rules: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RuleSet>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RuleSet): RuleSet {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated testgrid.custom_evaluator.Rule rules */ 1:
                    message.rules.push(Rule.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RuleSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated testgrid.custom_evaluator.Rule rules = 1; */
        for (let i = 0; i < message.rules.length; i++)
            Rule.internalBinaryWrite(message.rules[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message testgrid.custom_evaluator.RuleSet
 */
export const RuleSet = new RuleSet$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rule$Type extends MessageType<Rule> {
    constructor() {
        super("testgrid.custom_evaluator.Rule", [
            { no: 1, name: "test_result_comparisons", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TestResultComparison },
            { no: 3, name: "computed_status", kind: "enum", T: () => ["testgrid.test_status.TestStatus", TestStatus] }
        ]);
    }
    create(value?: PartialMessage<Rule>): Rule {
        const message = { testResultComparisons: [], computedStatus: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Rule>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rule): Rule {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated testgrid.custom_evaluator.TestResultComparison test_result_comparisons */ 1:
                    message.testResultComparisons.push(TestResultComparison.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* testgrid.test_status.TestStatus computed_status */ 3:
                    message.computedStatus = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Rule, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated testgrid.custom_evaluator.TestResultComparison test_result_comparisons = 1; */
        for (let i = 0; i < message.testResultComparisons.length; i++)
            TestResultComparison.internalBinaryWrite(message.testResultComparisons[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* testgrid.test_status.TestStatus computed_status = 3; */
        if (message.computedStatus !== 0)
            writer.tag(3, WireType.Varint).int32(message.computedStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message testgrid.custom_evaluator.Rule
 */
export const Rule = new Rule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TestResultComparison$Type extends MessageType<TestResultComparison> {
    constructor() {
        super("testgrid.custom_evaluator.TestResultComparison", [
            { no: 1, name: "comparison", kind: "message", T: () => Comparison },
            { no: 2, name: "property_key", kind: "scalar", oneof: "testResultInfo", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "test_result_field", kind: "scalar", oneof: "testResultInfo", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "test_result_error_field", kind: "scalar", oneof: "testResultInfo", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "target_status", kind: "scalar", oneof: "testResultInfo", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<TestResultComparison>): TestResultComparison {
        const message = { testResultInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TestResultComparison>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TestResultComparison): TestResultComparison {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* testgrid.custom_evaluator.Comparison comparison */ 1:
                    message.comparison = Comparison.internalBinaryRead(reader, reader.uint32(), options, message.comparison);
                    break;
                case /* string property_key */ 2:
                    message.testResultInfo = {
                        oneofKind: "propertyKey",
                        propertyKey: reader.string()
                    };
                    break;
                case /* string test_result_field */ 3:
                    message.testResultInfo = {
                        oneofKind: "testResultField",
                        testResultField: reader.string()
                    };
                    break;
                case /* string test_result_error_field */ 4:
                    message.testResultInfo = {
                        oneofKind: "testResultErrorField",
                        testResultErrorField: reader.string()
                    };
                    break;
                case /* bool target_status */ 5:
                    message.testResultInfo = {
                        oneofKind: "targetStatus",
                        targetStatus: reader.bool()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TestResultComparison, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* testgrid.custom_evaluator.Comparison comparison = 1; */
        if (message.comparison)
            Comparison.internalBinaryWrite(message.comparison, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string property_key = 2; */
        if (message.testResultInfo.oneofKind === "propertyKey")
            writer.tag(2, WireType.LengthDelimited).string(message.testResultInfo.propertyKey);
        /* string test_result_field = 3; */
        if (message.testResultInfo.oneofKind === "testResultField")
            writer.tag(3, WireType.LengthDelimited).string(message.testResultInfo.testResultField);
        /* string test_result_error_field = 4; */
        if (message.testResultInfo.oneofKind === "testResultErrorField")
            writer.tag(4, WireType.LengthDelimited).string(message.testResultInfo.testResultErrorField);
        /* bool target_status = 5; */
        if (message.testResultInfo.oneofKind === "targetStatus")
            writer.tag(5, WireType.Varint).bool(message.testResultInfo.targetStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message testgrid.custom_evaluator.TestResultComparison
 */
export const TestResultComparison = new TestResultComparison$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Comparison$Type extends MessageType<Comparison> {
    constructor() {
        super("testgrid.custom_evaluator.Comparison", [
            { no: 1, name: "op", kind: "enum", T: () => ["testgrid.custom_evaluator.Comparison.Operator", Comparison_Operator] },
            { no: 2, name: "string_value", kind: "scalar", oneof: "comparisonValue", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "numerical_value", kind: "scalar", oneof: "comparisonValue", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "target_status_value", kind: "enum", oneof: "comparisonValue", T: () => ["testgrid.test_status.TestStatus", TestStatus] }
        ]);
    }
    create(value?: PartialMessage<Comparison>): Comparison {
        const message = { op: 0, comparisonValue: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Comparison>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Comparison): Comparison {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* testgrid.custom_evaluator.Comparison.Operator op */ 1:
                    message.op = reader.int32();
                    break;
                case /* string string_value */ 2:
                    message.comparisonValue = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* double numerical_value */ 3:
                    message.comparisonValue = {
                        oneofKind: "numericalValue",
                        numericalValue: reader.double()
                    };
                    break;
                case /* testgrid.test_status.TestStatus target_status_value */ 4:
                    message.comparisonValue = {
                        oneofKind: "targetStatusValue",
                        targetStatusValue: reader.int32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Comparison, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* testgrid.custom_evaluator.Comparison.Operator op = 1; */
        if (message.op !== 0)
            writer.tag(1, WireType.Varint).int32(message.op);
        /* string string_value = 2; */
        if (message.comparisonValue.oneofKind === "stringValue")
            writer.tag(2, WireType.LengthDelimited).string(message.comparisonValue.stringValue);
        /* double numerical_value = 3; */
        if (message.comparisonValue.oneofKind === "numericalValue")
            writer.tag(3, WireType.Bit64).double(message.comparisonValue.numericalValue);
        /* testgrid.test_status.TestStatus target_status_value = 4; */
        if (message.comparisonValue.oneofKind === "targetStatusValue")
            writer.tag(4, WireType.Varint).int32(message.comparisonValue.targetStatusValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message testgrid.custom_evaluator.Comparison
 */
export const Comparison = new Comparison$Type();