/**
 * 存放一些常用工具函数
 */

// 对象深拷贝
export function deepCopy<T>(obj: T, cache = new WeakMap<object, unknown>()): T {
  // 如果是基本数据类型或者是 null/undefined，直接返回
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 检查缓存，防止循环引用
  if (cache.has(obj)) {
    return cache.get(obj) as T;
  }

  // 根据类型创建新的对象或数组
  const result = (Array.isArray(obj) ? [] : {}) as T;

  // 将当前对象放入缓存
  cache.set(obj, result);

  // 递归处理每个属性
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      (result as Record<string | number | symbol, unknown>)[key] = deepCopy(
        obj[key as keyof T],
        cache
      );
    }
  }

  return result;
}

// 对象数组根据ID去重
export const mergeUniqueById = <T extends { id: string | number }>(
  arr1: T[],
  arr2: T[]
): T[] => {
  return [
    ...new Map([...arr1, ...arr2].map((item) => [item.id, item])).values(),
  ];
};
