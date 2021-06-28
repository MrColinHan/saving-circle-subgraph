// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get circle(): Bytes {
    let value = this.get("circle");
    return value.toBytes();
  }

  set circle(value: Bytes) {
    this.set("circle", Value.fromBytes(value));
  }
}

export class ContributionMadeEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ContributionMadeEntity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ContributionMadeEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ContributionMadeEntity", id.toString(), this);
  }

  static load(id: string): ContributionMadeEntity | null {
    return store.get(
      "ContributionMadeEntity",
      id
    ) as ContributionMadeEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get circle(): Bytes {
    let value = this.get("circle");
    return value.toBytes();
  }

  set circle(value: Bytes) {
    this.set("circle", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class RequestGrantedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save RequestGrantedEntity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RequestGrantedEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RequestGrantedEntity", id.toString(), this);
  }

  static load(id: string): RequestGrantedEntity | null {
    return store.get("RequestGrantedEntity", id) as RequestGrantedEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requester(): Bytes {
    let value = this.get("requester");
    return value.toBytes();
  }

  set requester(value: Bytes) {
    this.set("requester", Value.fromBytes(value));
  }

  get circle(): Bytes {
    let value = this.get("circle");
    return value.toBytes();
  }

  set circle(value: Bytes) {
    this.set("circle", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class RequestMadeEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RequestMadeEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RequestMadeEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RequestMadeEntity", id.toString(), this);
  }

  static load(id: string): RequestMadeEntity | null {
    return store.get("RequestMadeEntity", id) as RequestMadeEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requester(): Bytes {
    let value = this.get("requester");
    return value.toBytes();
  }

  set requester(value: Bytes) {
    this.set("requester", Value.fromBytes(value));
  }

  get circle(): Bytes {
    let value = this.get("circle");
    return value.toBytes();
  }

  set circle(value: Bytes) {
    this.set("circle", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
