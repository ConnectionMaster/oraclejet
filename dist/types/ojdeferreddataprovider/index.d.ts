/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { DataProvider, SortCriterion, FetchByKeysParameters, ContainsKeysResults, FetchByKeysResults, FetchByOffsetParameters, FetchByOffsetResults, FetchListResult,
   FetchListParameters } from '../ojdataprovider';
declare class DeferredDataProvider<K, D> implements DataProvider<K, D> {
    constructor(dataProvider: Promise<DataProvider<K, D>>, capabilityFunc: (capabilityName: string) => any);
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(parameters: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(parameters: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(parameters: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(parameters?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName: string): any;
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown';
    removeEventListener(eventType: string, listener: EventListener): void;
}
export = DeferredDataProvider;
