import * as $protobuf from "protobufjs";
/** Namespace test. */
export namespace test {

    /** Properties of a c2s_hello. */
    interface Ic2s_hello {

        /** c2s_hello text */
        text?: (string|null);
    }

    /** Represents a c2s_hello. */
    class c2s_hello implements Ic2s_hello {

        /**
         * Constructs a new c2s_hello.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.Ic2s_hello);

        /** c2s_hello text. */
        public text: string;

        /**
         * Creates a new c2s_hello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_hello instance
         */
        public static create(properties?: test.Ic2s_hello): test.c2s_hello;

        /**
         * Encodes the specified c2s_hello message. Does not implicitly {@link test.c2s_hello.verify|verify} messages.
         * @param message c2s_hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.Ic2s_hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_hello message, length delimited. Does not implicitly {@link test.c2s_hello.verify|verify} messages.
         * @param message c2s_hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.Ic2s_hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_hello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.c2s_hello;

        /**
         * Decodes a c2s_hello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.c2s_hello;

        /**
         * Verifies a c2s_hello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_hello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_hello
         */
        public static fromObject(object: { [k: string]: any }): test.c2s_hello;

        /**
         * Creates a plain object from a c2s_hello message. Also converts values to other types if specified.
         * @param message c2s_hello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.c2s_hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_hello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_hello. */
    interface Is2c_hello {

        /** s2c_hello err */
        err?: (number|null);
    }

    /** Represents a s2c_hello. */
    class s2c_hello implements Is2c_hello {

        /**
         * Constructs a new s2c_hello.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.Is2c_hello);

        /** s2c_hello err. */
        public err: number;

        /**
         * Creates a new s2c_hello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_hello instance
         */
        public static create(properties?: test.Is2c_hello): test.s2c_hello;

        /**
         * Encodes the specified s2c_hello message. Does not implicitly {@link test.s2c_hello.verify|verify} messages.
         * @param message s2c_hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.Is2c_hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_hello message, length delimited. Does not implicitly {@link test.s2c_hello.verify|verify} messages.
         * @param message s2c_hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.Is2c_hello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_hello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.s2c_hello;

        /**
         * Decodes a s2c_hello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.s2c_hello;

        /**
         * Verifies a s2c_hello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_hello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_hello
         */
        public static fromObject(object: { [k: string]: any }): test.s2c_hello;

        /**
         * Creates a plain object from a s2c_hello message. Also converts values to other types if specified.
         * @param message s2c_hello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: test.s2c_hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_hello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a User. */
    interface IUser {

        /** User uid */
        uid?: (number|Long|null);

        /** User nickname */
        nickname?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User uid. */
        public uid: (number|Long);

        /** User nickname. */
        public nickname: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: user.IUser): user.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_data. */
    interface Ic2s_data {
    }

    /** Represents a c2s_data. */
    class c2s_data implements Ic2s_data {

        /**
         * Constructs a new c2s_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_data);

        /**
         * Creates a new c2s_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_data instance
         */
        public static create(properties?: user.Ic2s_data): user.c2s_data;

        /**
         * Encodes the specified c2s_data message. Does not implicitly {@link user.c2s_data.verify|verify} messages.
         * @param message c2s_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_data message, length delimited. Does not implicitly {@link user.c2s_data.verify|verify} messages.
         * @param message c2s_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_data;

        /**
         * Decodes a c2s_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_data;

        /**
         * Verifies a c2s_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_data
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_data;

        /**
         * Creates a plain object from a c2s_data message. Also converts values to other types if specified.
         * @param message c2s_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_data. */
    interface Is2c_data {

        /** s2c_data err */
        err?: (number|null);

        /** s2c_data user */
        user?: (user.IUser|null);
    }

    /** Represents a s2c_data. */
    class s2c_data implements Is2c_data {

        /**
         * Constructs a new s2c_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_data);

        /** s2c_data err. */
        public err: number;

        /** s2c_data user. */
        public user?: (user.IUser|null);

        /**
         * Creates a new s2c_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_data instance
         */
        public static create(properties?: user.Is2c_data): user.s2c_data;

        /**
         * Encodes the specified s2c_data message. Does not implicitly {@link user.s2c_data.verify|verify} messages.
         * @param message s2c_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_data message, length delimited. Does not implicitly {@link user.s2c_data.verify|verify} messages.
         * @param message s2c_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_data;

        /**
         * Decodes a s2c_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_data;

        /**
         * Verifies a s2c_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_data
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_data;

        /**
         * Creates a plain object from a s2c_data message. Also converts values to other types if specified.
         * @param message s2c_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
