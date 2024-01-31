import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPrograms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Programs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly day: string;
  readonly time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrograms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Programs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly day: string;
  readonly time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Programs = LazyLoading extends LazyLoadingDisabled ? EagerPrograms : LazyPrograms

export declare const Programs: (new (init: ModelInit<Programs>) => Programs) & {
  copyOf(source: Programs, mutator: (draft: MutableModel<Programs>) => MutableModel<Programs> | void): Programs;
}