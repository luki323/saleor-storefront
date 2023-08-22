import type {getAddressValidationRules} from '../../_tools/get-address-validation-rules';
import type {useAddressSchema} from './use-address-schema';

export type AddressSchema = Zod.infer<ReturnType<typeof useAddressSchema>>;

export type AddressValidationRules = Awaited<
  ReturnType<typeof getAddressValidationRules>
>;
