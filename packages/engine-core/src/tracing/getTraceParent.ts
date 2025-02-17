import { Context, context as _context, trace } from '@opentelemetry/api'

import { TracingConfig } from './getTracingConfig'

/**
 * Gets the traceparent for a given context. It will infer it from the current
 * context if no parameter is provided.
 * @param context an otel context
 */
export function getTraceParent({
  context,
  tracingConfig,
}: {
  context?: Context
  tracingConfig?: TracingConfig
}): string {
  const span = trace.getSpanContext(context ?? _context.active())

  if (tracingConfig?.enabled && span?.traceFlags === 1) {
    return `00-${span.traceId}-${span.spanId}-01`
  } else {
    // https://www.w3.org/TR/trace-context/#examples-of-http-traceparent-headers
    // If traceparent ends with -00 this trace will not be sampled
    return `00-00-00-00`
  }
}
