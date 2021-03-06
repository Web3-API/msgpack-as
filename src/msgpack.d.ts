export declare class Decoder {
  private reader;
  constructor(ua: ArrayBuffer);
  isNextNil(): bool;
  readBool(): bool;
  readInt8(): i8;
  readInt16(): i16;
  readInt32(): i32;
  readInt64(): i64;
  readUInt8(): u8;
  readUInt16(): u16;
  readUInt32(): u32;
  readUInt64(): u64;
  readFloat32(): f32;
  readFloat64(): f64;
  readString(): string;
  readStringLength(): u32;
  readBinLength(): u32;
  readByteArray(): ArrayBuffer;
  readArraySize(): u32;
  readMapSize(): u32;
  isFloat32(u: u8): bool;
  isFloat64(u: u8): bool;
  isFixedInt(u: u8): bool;
  isNegativeFixedInt(u: u8): bool;
  isFixedMap(u: u8): bool;
  isFixedArray(u: u8): bool;
  isFixedString(u: u8): bool;
  isNil(u: u8): bool;
  skip(): void;
  getSize(): i32;
  readArray<T>(fn: (decoder: Decoder) => T): Array<T>;
  readNullableArray<T>(fn: (decoder: Decoder) => T): Array<T> | null;
  readMap<K, V>(
    keyFn: (decoder: Decoder) => K,
    valueFn: (decoder: Decoder) => V
  ): Map<K, V>;
  readNullableMap<K, V>(
    keyFn: (decoder: Decoder) => K,
    valueFn: (decoder: Decoder) => V
  ): Map<K, V> | null;
}

export declare class Encoder {
  private reader;
  constructor(ua: ArrayBuffer);
  writeNil(): void;
  writeBool(value: bool): void;
  writeInt8(value: i8): void;
  writeInt16(value: i16): void;
  writeInt32(value: i32): void;
  writeInt64(value: i64): void;
  writeUInt8(value: u8): void;
  writeUInt16(value: u16): void;
  writeUInt32(value: u32): void;
  writeUInt64(value: u64): void;
  writeFloat32(value: f32): void;
  writeFloat64(value: f64): void;
  writeString(value: string): void;
  writeStringLength(length: u32): void;
  writeByteArray(ab: ArrayBuffer): void;
  writeBinLength(length: u32): void;
  writeArraySize(length: u32): void;
  writeMapSize(length: u32): void;
  writeArray<T>(a: Array<T>, fn: (encoder: Encoder, item: T) => void): void;
  writeNullableArray<T>(
    a: Array<T> | null,
    fn: (encoder: Encoder, item: T) => void
  ): void;
  writeMap<K, V>(
    m: Map<K, V>,
    keyFn: (encoder: Encoder, key: K) => void,
    valueFn: (encoder: Encoder, value: V) => void
  ): void;
  writeNullableMap<K, V>(
    m: Map<K, V> | null,
    keyFn: (encoder: Encoder, key: K) => void,
    valueFn: (encoder: Encoder, value: V) => void
  ): void;
}

export declare class Sizer {
  length: i32;
  constructor();
  writeNil(): void;
  writeString(value: string): void;
  writeStringLength(length: u32): void;
  writeBool(value: bool): void;
  writeArraySize(length: u32): void;
  writeByteArray(ab: ArrayBuffer): void;
  writeBinLength(length: u32): void;
  writeMapSize(length: u32): void;
  writeInt8(value: i8): void;
  writeInt16(value: i16): void;
  writeInt32(value: i32): void;
  writeInt64(value: i64): void;
  writeUInt8(value: u8): void;
  writeUInt16(value: u16): void;
  writeUInt32(value: u32): void;
  writeUInt64(value: u64): void;
  writeFloat32(value: f32): void;
  writeFloat64(value: f64): void;
  writeArray<T>(a: Array<T>, fn: (sizer: Sizer, item: T) => void): void;
  writeNullableArray<T>(
    a: Array<T> | null,
    fn: (sizer: Sizer, item: T) => void
  ): void;
  writeMap<K, V>(
    m: Map<K, V>,
    keyFn: (sizer: Sizer, key: K) => void,
    valueFn: (sizer: Sizer, value: V) => void
  ): void;
  writeNullableMap<K, V>(
    m: Map<K, V> | null,
    keyFn: (sizer: Sizer, key: K) => void,
    valueFn: (sizer: Sizer, value: V) => void
  ): void;
}
